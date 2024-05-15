module.exports = {
  apps: [
    {
      name: 'API',
      script: 'dist',
      env: {
        NODE_ENV: 'development',
      },
      env_production: {
        NODE_ENV: 'production',
        PORT: 3000,
        DATABASE_NAME: 'recentlz', // 시스템 환경 변수 참조
        DATABASE_HOST:
          'recentlz-db.c5g0ewmay5c0.ap-northeast-2.rds.amazonaws.com', // 시스템 환경 변수 참조
        DATABASE_USERNAME: 'turtle601', // 시스템 환경 변수 참조
        DATABASE_PASSWORD: 'js1891024', // 시스템 환경 변수 참조
        YOUTUBE_API_KEY: 'AIzaSyAd1Pc5dP0E38ETejH-yZfuWRDXPNsw0Fw', // 시스템 환경 변수 참조
      },
    },
  ],
};
