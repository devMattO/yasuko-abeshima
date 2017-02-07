import React, { Component } from 'react';
import Gallery from 'react-photo-gallery';






// https://res.cloudinary.com/devmatto/image/upload/v1486316624/sc00049c86_gzu64c.jpg
// https://res.cloudinary.com/devmatto/image/upload/v1486316624/sc00041d9e_au1xum.jpg
// https://res.cloudinary.com/devmatto/image/upload/v1486316624/sc00013c99_fdvfeu.jpg
// https://res.cloudinary.com/devmatto/image/upload/v1486316624/sc00055eac_hpq0t0.jpg
// https://res.cloudinary.com/devmatto/image/upload/v1486316622/sc00010e98_fhismb.jpg
// https://res.cloudinary.com/devmatto/image/upload/v1486316622/sc00014a19_phammo.jpg
// https://res.cloudinary.com/devmatto/image/upload/v1486316621/sc0009e1de_crtvxt.jpg
// https://res.cloudinary.com/devmatto/image/upload/v1486316621/sc0006f22b_h3mgb3.jpg
// https://res.cloudinary.com/devmatto/image/upload/v1486316620/sc0006e4a6_mnmnfy.jpg
// https://res.cloudinary.com/devmatto/image/upload/v1486316619/sc0008e83b_tv1z4n.jpg
// https://res.cloudinary.com/devmatto/image/upload/v1486316619/sc0005bbac_lffxv3.jpg
// https://res.cloudinary.com/devmatto/image/upload/v1486316618/sc0001f4d6_pmglud.jpg
// https://res.cloudinary.com/devmatto/image/upload/v1486316618/sc0001cba3_deqv0i.jpg
// https://res.cloudinary.com/devmatto/image/upload/v1486316617/sc0001dd45_jhrjhg.jpg
// https://res.cloudinary.com/devmatto/image/upload/v1486316616/sc0001c6f5_xtqqvj.jpg
// https://res.cloudinary.com/devmatto/image/upload/v1486316615/sc0001ecbe_d02jiw.jpg
// https://res.cloudinary.com/devmatto/image/upload/v1486316615/sc0001b022_d7nhab.jpg
// https://res.cloudinary.com/devmatto/image/upload/v1486316613/sc0000da1d_zebdfb.jpg
// https://res.cloudinary.com/devmatto/image/upload/v1486316613/sc0000e247_zy9fof.jpg





const PHOTO_SET = [
  {
    src: 'https://res.cloudinary.com/devmatto/image/upload/v1486316629/sc00091094_lqgc4h.jpg',
    width: 681,
    height: 1024,
    aspectRatio: 1.5,
    lightboxImage:{
    src: 'https://res.cloudinary.com/devmatto/image/upload/v1486316629/sc00091094_lqgc4h.jpg',
    }
  },
  {
    src: 'https://res.cloudinary.com/devmatto/image/upload/v1486316629/sc00089185_ynvbjm.jpg',
    width: 600,
    height: 900,
    aspectRatio: .75,
    lightboxImage:{
    src: 'https://res.cloudinary.com/devmatto/image/upload/v1486316629/sc00089185_ynvbjm.jpg',
    }
  },
  {
    src: 'https://res.cloudinary.com/devmatto/image/upload/v1486316628/sc00082583_uh4ggy.jpg',
    width: 681,
    height: 1024,
    aspectRatio: 1.5,
    lightboxImage:{
    src: 'https://res.cloudinary.com/devmatto/image/upload/v1486316628/sc00082583_uh4ggy.jpg',
    }
  },
  {
    src: 'https://res.cloudinary.com/devmatto/image/upload/v1486316628/sc00068474_nlshcl.jpg',
    width: 600,
    height: 900,
    aspectRatio: .75,
    lightboxImage:{
    src: 'https://res.cloudinary.com/devmatto/image/upload/v1486316628/sc00068474_nlshcl.jpg',
    }
  },
  {
    src: 'https://res.cloudinary.com/devmatto/image/upload/v1486316627/sc00027b59_u021bg.jpg',
    width: 600,
    height: 1024,
    aspectRatio: 1.2,
    lightboxImage:{
    src: 'https://res.cloudinary.com/devmatto/image/upload/v1486316627/sc00027b59_u021bg.jpg',
    }
  },
  {
    src: 'https://res.cloudinary.com/devmatto/image/upload/v1486316627/sc0009555c_leodte.jpg',
    width: 600,
    height: 1024,
    aspectRatio: 1.4,
    lightboxImage:{
    src: 'https://res.cloudinary.com/devmatto/image/upload/v1486316627/sc0009555c_leodte.jpg',
    }
  },
  {
    src: 'https://res.cloudinary.com/devmatto/image/upload/v1486316627/sc00038938_fozqwo.jpg',
    width: 600,
    height: 600,
    aspectRatio: 1.5,
    lightboxImage:{
    src: 'https://res.cloudinary.com/devmatto/image/upload/v1486316627/sc00038938_fozqwo.jpg',
    }
  },
  {
    src: 'https://res.cloudinary.com/devmatto/image/upload/v1486316627/sc00026227_ajouod.jpg',
    width: 600,
    height: 600,
    aspectRatio: 1.5,
    lightboxImage:{
    src: 'https://res.cloudinary.com/devmatto/image/upload/v1486316627/sc00026227_ajouod.jpg',
    }
  },
  {
    src: 'https://res.cloudinary.com/devmatto/image/upload/v1486316627/sc000941a5_mfdv9c.jpg',
    width: 600,
    height: 600,
    aspectRatio: 1.4,
    lightboxImage:{
    src: 'https://res.cloudinary.com/devmatto/image/upload/v1486316627/sc000941a5_mfdv9c.jpg',
    }
  },
  {
    src: 'https://res.cloudinary.com/devmatto/image/upload/v1486316627/sc000832c0_lscjvj.jpg',
    width: 600,
    height: 600,
    aspectRatio: 1.4,
    lightboxImage:{
    src: 'https://res.cloudinary.com/devmatto/image/upload/v1486316627/sc000832c0_lscjvj.jpg',
    }
  },
  {
    src: 'https://res.cloudinary.com/devmatto/image/upload/v1486316626/IMG_0255_jqo8ur.jpg',
    width: 600,
    height: 900,
    aspectRatio: .75,
    lightboxImage:{
    src: 'https://res.cloudinary.com/devmatto/image/upload/v1486316626/IMG_0255_jqo8ur.jpg',
    }
  },
  {
    src: 'https://res.cloudinary.com/devmatto/image/upload/v1486316626/sc0000780c_p8tpts.jpg',
    width: 600,
    height: 1024,
    aspectRatio: .6,
    lightboxImage:{
    src: 'https://res.cloudinary.com/devmatto/image/upload/v1486316626/sc0000780c_p8tpts.jpg',
    }
  },
  {
    src: 'https://res.cloudinary.com/devmatto/image/upload/v1486316626/IMG_0007_eax04c.jpg',
    width: 600,
    height: 900,
    aspectRatio: .75,
    lightboxImage:{
    src: 'https://res.cloudinary.com/devmatto/image/upload/v1486316626/IMG_0007_eax04c.jpg',
    }
  },
  {
    src: 'https://res.cloudinary.com/devmatto/image/upload/v1486316626/sc000684a7_hgf55r.jpg',
    width: 600,
    height: 900,
    aspectRatio: .75,
    lightboxImage:{
    src: 'https://res.cloudinary.com/devmatto/image/upload/v1486316626/sc000684a7_hgf55r.jpg',
    }
  },
  {
    src: 'https://res.cloudinary.com/devmatto/image/upload/v1486316625/sc00065e94_l3f8mk.jpg',
    width: 1024,
    height: 681,
    aspectRatio: 1.5,
    lightboxImage:{
    src: 'https://res.cloudinary.com/devmatto/image/upload/v1486316625/sc00065e94_l3f8mk.jpg',
    }
  },
  {
    src: '',
    width: 600,
    height: 600,
    aspectRatio: 1,
    lightboxImage:{
    src: '',
    }
  },
  {
    src: '',
    width: 600,
    height: 600,
    aspectRatio: 1,
    lightboxImage:{
    src: '',
    }
  },
  {
    src: '',
    width: 600,
    height: 600,
    aspectRatio: 1,
    lightboxImage:{
    src: '',
    }
  },
  {
    src: '',
    width: 600,
    height: 600,
    aspectRatio: 1,
    lightboxImage:{
    src: '',
    }
  },
  {
    src: '',
    width: 600,
    height: 600,
    aspectRatio: 1,
    lightboxImage:{
    src: '',
    }
  },
  {
    src: '',
    width: 600,
    height: 600,
    aspectRatio: 1,
    lightboxImage:{
    src: '',
    }
  },
  {
    src: '',
    width: 600,
    height: 600,
    aspectRatio: 1,
    lightboxImage:{
    src: '',
    }
  },
  {
    src: '',
    width: 600,
    height: 600,
    aspectRatio: 1,
    lightboxImage:{
    src: '',
    }
  },
  {
    src: '',
    width: 600,
    height: 600,
    aspectRatio: 1,
    lightboxImage:{
    src: '',
    }
  },
  {
    src: '',
    width: 600,
    height: 600,
    aspectRatio: 1,
    lightboxImage:{
    src: '',
    }
  },
  {
    src: '',
    width: 600,
    height: 600,
    aspectRatio: 1,
    lightboxImage:{
    src: '',
    }
  },


];

export default class ImageLightbox extends Component {
    render() {
    return (
        <Gallery photos={PHOTO_SET} />
    );
    }
}