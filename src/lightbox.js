import React, { Component } from 'react';
import Gallery from 'react-photo-gallery';


// https://res.cloudinary.com/devmatto/image/upload/v1486316612/DSCN0003_jnuc3p.jpg
// https://res.cloudinary.com/devmatto/image/upload/v1486316611/sc000c40f3_hn5k9x.jpg
// https://res.cloudinary.com/devmatto/image/upload/v1486316610/sc000c1d7a_pisxm4.jpg
// https://res.cloudinary.com/devmatto/image/upload/v1486316609/sc000b87f1_ha3edc.jpg
// https://res.cloudinary.com/devmatto/image/upload/v1486316608/sc000b6d00_a2zmhm.jpg
// https://res.cloudinary.com/devmatto/image/upload/v1486316607/sc000a02b1_bp5rvf.jpg
// https://res.cloudinary.com/devmatto/image/upload/v1486316606/sc0000aea5_m3tgui.jpg
// https://res.cloudinary.com/devmatto/image/upload/v1486316606/sc000af309_wv9oqk.jpg
// https://res.cloudinary.com/devmatto/image/upload/v1486316604/DSC00080_t15hcb.jpg
// https://res.cloudinary.com/devmatto/image/upload/v1486316603/DSC00044_ujmiww.jpg
// https://res.cloudinary.com/devmatto/image/upload/v1486316603/DSC00053_x9w3dr.jpg
// https://res.cloudinary.com/devmatto/image/upload/v1486316603/DSC00036_dgirxn.jpg
// https://res.cloudinary.com/devmatto/image/upload/v1486316603/DSC00043_bhzkiu.jpg
// https://res.cloudinary.com/devmatto/image/upload/v1486316603/DSC00017_inxt6g.jpg


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
    aspectRatio: 1.4,
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
    aspectRatio: 1.5,
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
    aspectRatio: 1.5,
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
    src: 'https://res.cloudinary.com/devmatto/image/upload/v1486316624/sc00049c86_gzu64c.jpg',
    width: 900,
    height: 600,
    aspectRatio: 1.5,
    lightboxImage:{
    src: 'https://res.cloudinary.com/devmatto/image/upload/v1486316624/sc00049c86_gzu64c.jpg',
    }
  },
  {
    src: 'https://res.cloudinary.com/devmatto/image/upload/v1486316624/sc00041d9e_au1xum.jpg',
    width: 600,
    height: 900,
    aspectRatio: .75,
    lightboxImage:{
    src: 'https://res.cloudinary.com/devmatto/image/upload/v1486316624/sc00041d9e_au1xum.jpg',
    }
  },
  {
    src: 'https://res.cloudinary.com/devmatto/image/upload/v1486316624/sc00013c99_fdvfeu.jpg',
    width: 900,
    height: 600,
    aspectRatio: 1.5,
    lightboxImage:{
    src: 'https://res.cloudinary.com/devmatto/image/upload/v1486316624/sc00013c99_fdvfeu.jpg',
    }
  },
  {
    src: 'https://res.cloudinary.com/devmatto/image/upload/v1486316624/sc00055eac_hpq0t0.jpg',
    width: 600,
    height: 1024,
    aspectRatio: .65,
    lightboxImage:{
    src: 'https://res.cloudinary.com/devmatto/image/upload/v1486316624/sc00055eac_hpq0t0.jpg',
    }
  },
  {
    src: 'https://res.cloudinary.com/devmatto/image/upload/v1486316622/sc00010e98_fhismb.jpg',
    width: 1024,
    height: 600,
    aspectRatio: 1.5,
    lightboxImage:{
    src: 'https://res.cloudinary.com/devmatto/image/upload/v1486316622/sc00010e98_fhismb.jpg',
    }
  },
  {
    src: 'https://res.cloudinary.com/devmatto/image/upload/v1486316622/sc00014a19_phammo.jpg',
    width: 681,
    height: 1024,
    aspectRatio: .7,
    lightboxImage:{
    src: 'https://res.cloudinary.com/devmatto/image/upload/v1486316622/sc00014a19_phammo.jpg',
    }
  },
  {
    src: 'https://res.cloudinary.com/devmatto/image/upload/v1486316621/sc0009e1de_crtvxt.jpg',
    width: 900,
    height: 600,
    aspectRatio: 1.4,
    lightboxImage:{
    src: 'https://res.cloudinary.com/devmatto/image/upload/v1486316621/sc0009e1de_crtvxt.jpg',
    }
  },
  {
    src: 'https://res.cloudinary.com/devmatto/image/upload/v1486316621/sc0006f22b_h3mgb3.jpg',
    width: 900,
    height: 600,
    aspectRatio: 1.4,
    lightboxImage:{
    src: 'https://res.cloudinary.com/devmatto/image/upload/v1486316621/sc0006f22b_h3mgb3.jpg',
    }
  },
  {
    src: 'https://res.cloudinary.com/devmatto/image/upload/v1486316620/sc0006e4a6_mnmnfy.jpg',
    width: 900,
    height: 600,
    aspectRatio: 1.3,
    lightboxImage:{
    src: 'https://res.cloudinary.com/devmatto/image/upload/v1486316620/sc0006e4a6_mnmnfy.jpg',
    }
  },
  {
    src: 'https://res.cloudinary.com/devmatto/image/upload/v1486316619/sc0008e83b_tv1z4n.jpg',
    width: 681,
    height: 1024,
    aspectRatio: .7,
    lightboxImage:{
    src: 'https://res.cloudinary.com/devmatto/image/upload/v1486316619/sc0008e83b_tv1z4n.jpg',
    }
  },
  {
    src: 'https://res.cloudinary.com/devmatto/image/upload/v1486316619/sc0005bbac_lffxv3.jpg',
    width: 900,
    height: 600,
    aspectRatio: 1.3,
    lightboxImage:{
    src: 'https://res.cloudinary.com/devmatto/image/upload/v1486316619/sc0005bbac_lffxv3.jpg',
    }
  },
  {
    src: 'https://res.cloudinary.com/devmatto/image/upload/v1486316618/sc0001f4d6_pmglud.jpg',
    width: 900,
    height: 600,
    aspectRatio: 1.5,
    lightboxImage:{
    src: 'https://res.cloudinary.com/devmatto/image/upload/v1486316618/sc0001f4d6_pmglud.jpg',
    }
  },
  {
    src: 'https://res.cloudinary.com/devmatto/image/upload/v1486316618/sc0001cba3_deqv0i.jpg',
    width: 681,
    height: 1024,
    aspectRatio: .7,
    lightboxImage:{
    src: 'https://res.cloudinary.com/devmatto/image/upload/v1486316618/sc0001cba3_deqv0i.jpg',
    }
  },
  {
    src: 'https://res.cloudinary.com/devmatto/image/upload/v1486316617/sc0001dd45_jhrjhg.jpg',
    width: 1024,
    height: 681,
    aspectRatio: 1.5,
    lightboxImage:{
    src: 'https://res.cloudinary.com/devmatto/image/upload/v1486316617/sc0001dd45_jhrjhg.jpg',
    }
  },
  {
    src: 'https://res.cloudinary.com/devmatto/image/upload/v1486316616/sc0001c6f5_xtqqvj.jpg',
    width: 681,
    height: 1024,
    aspectRatio: .7,
    lightboxImage:{
    src: 'https://res.cloudinary.com/devmatto/image/upload/v1486316616/sc0001c6f5_xtqqvj.jpg',
    }
  },
  {
    src: 'https://res.cloudinary.com/devmatto/image/upload/v1486316615/sc0001ecbe_d02jiw.jpg',
    width: 900,
    height: 600,
    aspectRatio: 1.5,
    lightboxImage:{
    src: 'https://res.cloudinary.com/devmatto/image/upload/v1486316615/sc0001ecbe_d02jiw.jpg',
    }
  },
  {
    src: 'https://res.cloudinary.com/devmatto/image/upload/v1486316615/sc0001b022_d7nhab.jpg',
    width: 900,
    height: 600,
    aspectRatio: 1.5,
    lightboxImage:{
    src: 'https://res.cloudinary.com/devmatto/image/upload/v1486316615/sc0001b022_d7nhab.jpg',
    }
  },
  {
    src: 'https://res.cloudinary.com/devmatto/image/upload/v1486316613/sc0000da1d_zebdfb.jpg',
    width: 900,
    height: 600,
    aspectRatio: 1.5,
    lightboxImage:{
    src: 'https://res.cloudinary.com/devmatto/image/upload/v1486316613/sc0000da1d_zebdfb.jpg',
    }
  },
  {
    src: 'https://res.cloudinary.com/devmatto/image/upload/v1486316613/sc0000e247_zy9fof.jpg',
    width: 900,
    height: 600,
    aspectRatio: 1.3,
    lightboxImage:{
    src: 'https://res.cloudinary.com/devmatto/image/upload/v1486316613/sc0000e247_zy9fof.jpg',
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