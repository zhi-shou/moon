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

      const file = chooseResult.tempFiles[0];
      const tempFilePath = file.tempFilePath;

      // 切片大小 5MB
      const chunkSize = 5 * 1024 * 1024;
      const totalSize = file.size;
      const chunks = Math.ceil(totalSize / chunkSize);
      
      // 创建切片上传任务
      const uploadId = await initMult
