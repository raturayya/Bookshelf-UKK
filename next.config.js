module.exports = {
  async rewrites() {
    return [
      {
        source: '/uploads/:path*',
        destination: `${process.env.NEXT_PUBLIC_BASE_URL || ''}/uploads/:path*`,
      },
    ];
  },
};

