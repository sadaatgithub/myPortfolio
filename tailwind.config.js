/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode:'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily:{
      'marck': 'Marck Script',
      'nunito': 'Nunito',
      'monteserrat-alt':'Montserrat Alternates',
      'port-ligat-sans': 'Port Lligat Sans',
      'fira-sans': 'Fira Sans'
  },
    extend: {
      animation:{
        fadeIn: "fadein 0.6s cubic-bezier(0.390, 0.575, 0.565, 1.000) both",
        slideInLeft:"slideInLeft 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both",
        slideInRight:"slideInRight 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both",
        drawerDown:"drawerDown 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940)  both",
        scaleDownCenter:"scaleDownCenter 0.8s cubic-bezier(0.250, 0.460, 0.450, 0.940) both",
        slidUpFast:"slidUpFast 2s cubic-bezier(0.250, 0.460, 0.450, 0.940) 4s both",
        slideInBottom:"slideInBottom 1s cubic-bezier(0.250, 0.460, 0.450, 0.940) both",

        

      },
      keyframes:{
        fadein:{
          "0%" :{
                  transform: "translateY(-50px)",
            opacity: 0,
          },
          "100%": {
                    transform: "translateY(0)",
            opacity: 1,
          },
        },
        slideInLeft:{
          "0%": {
            // -webkit-transform: translateX(-1000px);
                    transform: "translateX(-1000px)",
            opacity: 0,
          },
          "100%" :{
            // -webkit-transform: translateX(0);
                    transform: "translateX(0)",
            opacity: 1,
          }
        },
        slideInRight:{
          "0%": {
            // -webkit-transform: translateX(-1000px);
                    transform: "translateX(1000px)",
                    // clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)",
            opacity: 0,
          },
          "100%" :{
            // -webkit-transform: translateX(0);
                    transform: "translateX(0)",
                    // clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
            opacity: 1,
            
          }
        },
        slideInBottom:{
          "0%" :{
                  transform: "translateY(30px)",
            opacity: 0,

          },
          "100%": {
                    transform: "translateY(0)",
            opacity: 1,
          },
        },
        drawerDown:{
          "0%": {
            // -webkit-transform: translateX(-1000px);
                    clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)",
            opacity: 0,
          },
          "100%" :{
            // -webkit-transform: translateX(0);
                    clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
            opacity: 1,
            
          }
        },
        scaleDownCenter:{
          "0%":{
            transform: "scale(2)",
            opacity:0
          },
          "100%":{
            transform:"scale(1)",
            opacity:1,
          }
        },
        slidUpFast:{
          "to":{
            transform:"translateY(-500%)",
            opacity:0,
          }
        }
      },
      backgroundImage: {
        'hero-pattern1': "url('./assets/imgs/herolandscape2.jpg')",
        'hero-pattern2': "url('./assets/imgs/heroLandscape1.jpg')",
        'hero-pattern3': "url('./assets/imgs/herolandscape3.jpg')",
        'hero-pattern4': "url('./assets/imgs/project1.jpg')",



        // 'footer-texture': "url('/img/footer-texture.png')",
      }
    
    },
  },
  plugins: [],
}
