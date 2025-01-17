import * as React from 'react';
import {
  Routes,
  Route,
  Link,
  useNavigate,
  useLocation,
  Navigate,
  Outlet,
} from 'react-router-dom';
import { fakeAuthProvider } from './auth';

export default function App() {
  return (
    <AuthProvider>
      <h1>鉴权样例</h1>

      <p>
        本例展示了一个简单的登录流程，包含了一个公共页面，一个需要登陆才能看的受保护的页面，以及一个登录页面。
      </p>

      <p>
        首先，访问公共页面，然后访问受保护页面。当访问受保护页面的时候，由于你还未登录，所以你会被重定向到登录页面。登录之后你就会被重定向至受保护页面。
      </p>

      <p>
        请注意每次URL的变化.
        在你点击登录之后，如果这时候你点击浏览器的回退按钮，你觉得你会回到登录页面吗？不！你已经登录了。如果不相信你可以试一试，你会发现你回到的是访问登录页面之前的那个页面，也就是公共页面。
      </p>

      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<PublicPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route
            path="/protected"
            element={
              <RequireAuth>
                <ProtectedPage />
              </RequireAuth>
            }
          />
        </Route>
      </Routes>
    </AuthProvider>
  );
}

function Layout() {
  return (
    <div>
      <AuthStatus />

      <ul>
        <li>
          <Link to="/">公共页面</Link>
        </li>
        <li>
          <Link to="/protected">受保护页面e</Link>
        </li>
      </ul>

      <Outlet />
    </div>
  );
}


let AuthContext = React.createContext();

function AuthProvider({ children }) {
  let [user, setUser] = React.useState(null);

  let signin = (newUser, callback) => {
    return fakeAuthProvider.signin(() => {
      setUser(newUser);
      callback();
    });
  };

  let signout = (callback) => {
    return fakeAuthProvider.signout(() => {
      setUser(null);
      callback();
    });
  };

  let value = { user, signin, signout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

function useAuth() {
  return React.useContext(AuthContext);
}

function AuthStatus() {
  let auth = useAuth();
  let navigate = useNavigate();

  if (!auth.user) {
    return <p>还未登录！</p>;
  }

  return (
    <p>
      欢迎 {auth.user}!{' '}
      <button
        onClick={() => {
          auth.signout(() => navigate('/'));
        }}
      >
        登出
      </button>
    </p>
  );
}

function RequireAuth({ children }) {
  let auth = useAuth();
  let location = useLocation();

  if (!auth.user) {
    // 重定向至login页面，但是保存用户试图访问的location，这样我们可以把登陆后的用户重定向至那个页面
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}

function LoginPage() {
  let navigate = useNavigate();
  let location = useLocation();
  let auth = useAuth();

  let from = location.state?.from?.pathname || '/';

  function handleSubmit(event) {
    event.preventDefault();

    let formData = new FormData(event.currentTarget);
    let username = formData.get('username');

    auth.signin(username, () => {
      // 送用户回去他们试图访问的页面
      // 使用 { replace: true } 保证我们不会把login放入history栈
      // 意味着当用户点击回退，他不会重新回退到login页面
      navigate(from, { replace: true });
    });
  }

  return (
    <div>
      <p>你必须登录去查看{from}页面</p>

      <form onSubmit={handleSubmit}>
        <label>
          Username: <input name="username" type="text" />
        </label>{' '}
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

function PublicPage() {
  return <h3>这是公共页面</h3>;
}

function ProtectedPage() {
  return <h3>这是受保护页面</h3>;
}
