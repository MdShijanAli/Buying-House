import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        index: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'pages/about.html'),
        career: resolve(__dirname, 'pages/career.html'),
        contact: resolve(__dirname, 'pages/contact.html'),
        gallery: resolve(__dirname, 'pages/gallery.html'),
        privacyPolicy: resolve(__dirname, 'pages/privacy-policy.html'),
        products: resolve(__dirname, 'pages/products.html'),
        returnRefund: resolve(__dirname, 'pages/return-refund.html'),
        termandcondition: resolve(__dirname, 'pages/termandcondition.html'),
        jackets: resolve(__dirname, 'pages/products/jackets.html'),
        kids: resolve(__dirname, 'pages/products/kids.html'),
        mens: resolve(__dirname, 'pages/products/mens.html'),
        productDetails: resolve(__dirname, 'pages/products/product-details.html'),
        sweter: resolve(__dirname, 'pages/products/sweter.html'),
        undergarments: resolve(__dirname, 'pages/products/undergarments.html'),
        womens: resolve(__dirname, 'pages/products/womens.html'),
        style: resolve(__dirname, 'style.css'),
        main: resolve(__dirname, 'main.js'),
      },
    },
  },
})