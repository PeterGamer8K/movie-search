import { MovieSection } from "./components/MovieSection";


export function Home () {
  return (

      <section className="section">
          <div className="container">
            <div className="columns">
              <div className="column is-7 is-offset-2">
                <input type="text" className="input"/>
              </div>
              <div className="column is-1">
                <button className="button is-info">Search</button>
              </div>
            

            </div>
          

            < MovieSection sectionTitle="Filmes"/>
            
          </div>
          



      </section>
    
  )
}