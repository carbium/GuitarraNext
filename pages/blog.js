import Layout from "../components/layout"
import Post from "../components/post";
import styles from "../styles/grid.module.css"


function Blog({posts}) {

  return (
    <Layout
        title={'Blog de Musica'}
        description={'Blog de Musica Virtual, Tienda de Música'}
    >
        <main className="contenedor">
          <h1 className="heading">Blog</h1>
          <div className={styles.grid}>
            {posts.map( post => (
                <Post
                  key={post.id}
                  post={post.attributes}
                />
            ))}
          </div>

        </main>
    </Layout>
  )
}

export default Blog


export async function getStaticProps() {
  const respuesta = await fetch(`${process.env.API_URL}/posts?populate=imagen`)
  const {data: posts} = await respuesta.json() //renombro la variable


  return {
    props: {
      posts
    }
  }
}