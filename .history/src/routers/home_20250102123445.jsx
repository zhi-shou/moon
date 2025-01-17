import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { fakeAuthProvider } from '../auth';

export default function Home() {
  const navigate = useNavigate();

  const handleUpload = async () => {
    try {
      // 获取阿里云STS临时凭证
      const credentials = await getSTSCredentials();
      
      // 选择视频文件
      const chooseResult = await wx.chooseMedia({
        count: 1,
        mediaType: ['video'],
        sourceType: ['album', 'camera']
      });

      const tempFilePath = chooseResult.tempFiles[0].tempFilePath;

      // 上传到阿里云OSS
      const uploadResult = await wx.uploadFile({
        url: credentials.host,
        filePath: tempFilePath,
        name: 'file',
        formData: {
          key: `videos/${Date.now()}.mp4`,
          policy: credentials.policy,
          OSSAccessKeyId: credentials.accessKeyId,
          signature: credentials.signature
        }
      });

      if (uploadResult.statusCode === 200) {
        wx.showToast({
          title: '上传成功',
          icon: 'success'
        });
      }

    } catch (error) {
      console.error('Upload failed:', error);
      wx.showToast({
        title: '上传失败',
        icon: 'error'
      });
    }
  };

  return (
    <div style={{ padding: '1rem' }}>
      <h2>视频上传</h2>
      <button onClick={handleUpload}>
        选择并上传视频
      </button>
    </div>
  );
}

// 获取阿里云STS临时凭证
async function getSTSCredentials() {
  // 这里需要调用后端API获取STS凭证
  // 返回格式示例:
  return {
    accessKeyId: 'xxx',
    accessKeySecret: 'xxx', 
    securityToken: 'xxx',
    host: 'https://xxx.oss-cn-xxx.aliyuncs.com',
    policy: 'xxx',
    signature: 'xxx'
  };
}
