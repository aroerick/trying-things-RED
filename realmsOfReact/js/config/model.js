import Realm from 'realm'

const movieSchema = {
  name: 'Movie',
  primaryKey: 'id',
  properties: {
    id: 'int',
    title: 'string',
    realeaseYear: 'int?',
    starring: { type: 'string', default: 'Tom Cruise' },
  },
}

const realm = new Realm({ schema: [movieSchema] })

export const addMovie = (id, title, realeaseYear, starring) => {
  realm.write(() => {
    realm.create('Movie', {
      id,
      title,
      starring,
      realeaseYear,
    })
  })
}
// export const getMovies = realm.objects('Movie')
export const getMovies = () => {return realm.objects('Movie')}
export const deleteMovie = x => {return realm.write(() => {realm.delete(x)})}
export const filter = id => { return realm.objects('Movie').filtered(`id == ${id}`)}

// let getMovies = realm.objects('Movie')
// console.log('Car owners')

export default realm
