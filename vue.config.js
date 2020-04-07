module.exports = {
    devServer: {
        overlay: {
            warning: true,
            errors: true
        },
        proxy: {
            '/api': {
                target:'http://localhost:8080',
                ws: true,
                changeOrigin: true
            }
        }
    }
    
}


