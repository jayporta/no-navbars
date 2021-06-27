import amazon from 'app/_images/amazon.png'
import applebooks from 'app/_images/applebooks.png'
import bam from 'app/_images/bam.png'
import barnesnoble from 'app/_images/barnesnoble.png'
import bookshop from 'app/_images/bookshop.png'
import indiebound from 'app/_images/indiebound.png'
import missingImage from 'app/_images/missing_image.png'

export default (name = '') => {
  switch (name.toLowerCase()) {
    case 'amazon': return amazon
    case 'apple books': return applebooks
    case 'books-a-million': return bam
    case 'barnes and noble': return barnesnoble
    case 'bookshop': return bookshop
    case 'indiebound': return indiebound
  }
  return missingImage
}
