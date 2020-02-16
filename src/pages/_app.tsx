import '../styles/global.css'

export default ({ Component, pageProps }) => (
  <>
    <Component {...pageProps} />
    <footer>
      <p>Subscribe via <a href="#">RSS</a></p>
      <abbr title='This website and all its content are licensed under a Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License.'>CC BY-NC-SA 4.0</abbr> © 2019 - 2020 ❤️ Chao Xu
      <style jsx>{`
        footer {
          margin-bottom: 2rem;
          font-size: .8rem;
          text-align: center;
          color: #999;
        }
        abbr {
          cursor: help;
          text-decoration: none;
          border-bottom: 1px dotted;
        }
      `}</style>
    </footer>
  </>
)
