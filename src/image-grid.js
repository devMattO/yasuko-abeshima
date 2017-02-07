import React, { Component } from 'react';
import { ReactRpg } from 'react-rpg';

const previewStyles = {
  display: 'flex',
  flexFlow: 'row wrap',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  position: 'fixed',
  zIndex: '3',
};

const previewStyles2 = {
  height: '30px',
  width: '30px',
  zIndex: '4',
};

const previewStyles3 = {
  border: 'solid #ffffff 10px',
};

const ImagePreview = ({ url }) => <div className="preview-container" style={previewStyles} >
                                    <button style={previewStyles2} onClick={(a,b,c)=>{console.log(a,b.__proto__)}}>X</button>
                                    <img style={previewStyles3} onClick={(e)=>{console.log(url)}} src={url} alt={url} width="auto" height="600px" />
                                  </div>;

class Grid extends Component {
  constructor(props) {
      super(props);

      this.state = {
        padding: 10,
        columns: 3,
        popUp: false,
      };
  }

  closePopup(){
    this.setState({ popUp: false })
  }

  imagePopup(url, obj) {
      this.setState({ popUp: url });
      console.log(obj);
      // setTimeout(() => this.setState({ popUp: false }), 5000);
  }

  getImages() {
      return [
        { url: 'https://res.cloudinary.com/devmatto/image/upload/v1486316629/sc00091094_lqgc4h.jpg', clickHandler: ()=>{this.imagePopup.bind(this); this.closePopup.bind(this);} },
        { url: 'https://res.cloudinary.com/devmatto/image/upload/v1486316629/sc00089185_ynvbjm.jpg', clickHandler: this.imagePopup.bind(this) },
        { url: 'https://res.cloudinary.com/devmatto/image/upload/v1486316628/sc00082583_uh4ggy.jpg', clickHandler: this.imagePopup.bind(this) },
        { url: 'https://res.cloudinary.com/devmatto/image/upload/v1486316628/sc00068474_nlshcl.jpg', clickHandler: this.imagePopup.bind(this) },
        { url: 'https://res.cloudinary.com/devmatto/image/upload/v1486316627/sc00027b59_u021bg.jpg', clickHandler: this.imagePopup.bind(this) },
        { url: 'https://res.cloudinary.com/devmatto/image/upload/v1486316627/sc0009555c_leodte.jpg', clickHandler: this.imagePopup.bind(this) },
        { url: 'https://res.cloudinary.com/devmatto/image/upload/v1486316627/sc00038938_fozqwo.jpg', clickHandler: this.imagePopup.bind(this) },
        { url: 'https://res.cloudinary.com/devmatto/image/upload/v1486316627/sc00026227_ajouod.jpg', clickHandler: this.imagePopup.bind(this) },
        { url: 'https://res.cloudinary.com/devmatto/image/upload/v1486316627/sc000941a5_mfdv9c.jpg', clickHandler: this.imagePopup.bind(this) },
        { url: 'https://res.cloudinary.com/devmatto/image/upload/v1486316627/sc000832c0_lscjvj.jpg', clickHandler: this.imagePopup.bind(this) },
        { url: 'https://res.cloudinary.com/devmatto/image/upload/v1486316626/IMG_0255_jqo8ur.jpg', clickHandler: this.imagePopup.bind(this) },
        { url: 'https://res.cloudinary.com/devmatto/image/upload/v1486316626/sc0000780c_p8tpts.jpg', clickHandler: this.imagePopup.bind(this) },
        { url: 'https://res.cloudinary.com/devmatto/image/upload/v1486316626/IMG_0007_eax04c.jpg', clickHandler: this.imagePopup.bind(this) },
        { url: 'https://res.cloudinary.com/devmatto/image/upload/v1486316626/sc000684a7_hgf55r.jpg', clickHandler: this.imagePopup.bind(this) },
        { url: 'https://res.cloudinary.com/devmatto/image/upload/v1486316625/sc00065e94_l3f8mk.jpg', clickHandler: this.imagePopup.bind(this) },
        { url: 'https://res.cloudinary.com/devmatto/image/upload/v1486316624/sc00049c86_gzu64c.jpg', clickHandler: this.imagePopup.bind(this) },
        { url: 'https://res.cloudinary.com/devmatto/image/upload/v1486316624/sc00041d9e_au1xum.jpg', clickHandler: this.imagePopup.bind(this) },
        { url: 'https://res.cloudinary.com/devmatto/image/upload/v1486316624/sc00013c99_fdvfeu.jpg', clickHandler: this.imagePopup.bind(this) },
        { url: 'https://res.cloudinary.com/devmatto/image/upload/v1486316624/sc00055eac_hpq0t0.jpg', clickHandler: this.imagePopup.bind(this) },
        { url: 'https://res.cloudinary.com/devmatto/image/upload/v1486316622/sc00010e98_fhismb.jpg', clickHandler: this.imagePopup.bind(this) },
        { url: 'https://res.cloudinary.com/devmatto/image/upload/v1486316622/sc00014a19_phammo.jpg', clickHandler: this.imagePopup.bind(this) },
        { url: 'https://res.cloudinary.com/devmatto/image/upload/v1486316621/sc0009e1de_crtvxt.jpg', clickHandler: this.imagePopup.bind(this) },
        { url: 'https://res.cloudinary.com/devmatto/image/upload/v1486316621/sc0006f22b_h3mgb3.jpg', clickHandler: this.imagePopup.bind(this) },
        { url: 'https://res.cloudinary.com/devmatto/image/upload/v1486316620/sc0006e4a6_mnmnfy.jpg', clickHandler: this.imagePopup.bind(this) },
        { url: 'https://res.cloudinary.com/devmatto/image/upload/v1486316619/sc0008e83b_tv1z4n.jpg', clickHandler: this.imagePopup.bind(this) },
        { url: 'https://res.cloudinary.com/devmatto/image/upload/v1486316619/sc0005bbac_lffxv3.jpg', clickHandler: this.imagePopup.bind(this) },
        { url: 'https://res.cloudinary.com/devmatto/image/upload/v1486316618/sc0001f4d6_pmglud.jpg', clickHandler: this.imagePopup.bind(this) },
        { url: 'https://res.cloudinary.com/devmatto/image/upload/v1486316618/sc0001cba3_deqv0i.jpg', clickHandler: this.imagePopup.bind(this) },
        { url: 'https://res.cloudinary.com/devmatto/image/upload/v1486316617/sc0001dd45_jhrjhg.jpg', clickHandler: this.imagePopup.bind(this) },
        { url: 'https://res.cloudinary.com/devmatto/image/upload/v1486316616/sc0001c6f5_xtqqvj.jpg', clickHandler: this.imagePopup.bind(this) },
        { url: 'https://res.cloudinary.com/devmatto/image/upload/v1486316615/sc0001ecbe_d02jiw.jpg', clickHandler: this.imagePopup.bind(this) },
        { url: 'https://res.cloudinary.com/devmatto/image/upload/v1486316615/sc0001b022_d7nhab.jpg', clickHandler: this.imagePopup.bind(this) },
        { url: 'https://res.cloudinary.com/devmatto/image/upload/v1486316613/sc0000da1d_zebdfb.jpg', clickHandler: this.imagePopup.bind(this) },
        { url: 'https://res.cloudinary.com/devmatto/image/upload/v1486316613/sc0000e247_zy9fof.jpg', clickHandler: this.imagePopup.bind(this) },
        { url: 'https://res.cloudinary.com/devmatto/image/upload/v1486316612/DSCN0003_jnuc3p.jpg', clickHandler: this.imagePopup.bind(this) },
        { url: 'https://res.cloudinary.com/devmatto/image/upload/v1486316611/sc000c40f3_hn5k9x.jpg', clickHandler: this.imagePopup.bind(this) },
        { url: 'https://res.cloudinary.com/devmatto/image/upload/v1486316610/sc000c1d7a_pisxm4.jpg', clickHandler: this.imagePopup.bind(this) },
        { url: 'https://res.cloudinary.com/devmatto/image/upload/v1486316609/sc000b87f1_ha3edc.jpg', clickHandler: this.imagePopup.bind(this) },
        { url: 'https://res.cloudinary.com/devmatto/image/upload/v1486316608/sc000b6d00_a2zmhm.jpg', clickHandler: this.imagePopup.bind(this) },
        { url: 'https://res.cloudinary.com/devmatto/image/upload/v1486316607/sc000a02b1_bp5rvf.jpg', clickHandler: this.imagePopup.bind(this) },
        { url: 'https://res.cloudinary.com/devmatto/image/upload/v1486316606/sc0000aea5_m3tgui.jpg', clickHandler: this.imagePopup.bind(this) },
        { url: 'https://res.cloudinary.com/devmatto/image/upload/v1486316606/sc000af309_wv9oqk.jpg', clickHandler: this.imagePopup.bind(this) },
        { url: 'https://res.cloudinary.com/devmatto/image/upload/v1486316604/DSC00080_t15hcb.jpg', clickHandler: this.imagePopup.bind(this) },
        { url: 'https://res.cloudinary.com/devmatto/image/upload/v1486316603/DSC00044_ujmiww.jpg', clickHandler: this.imagePopup.bind(this) },
        { url: 'https://res.cloudinary.com/devmatto/image/upload/v1486316603/DSC00053_x9w3dr.jpg', clickHandler: this.imagePopup.bind(this) },
        { url: 'https://res.cloudinary.com/devmatto/image/upload/v1486316603/DSC00036_dgirxn.jpg', clickHandler: this.imagePopup.bind(this) },
        { url: 'https://res.cloudinary.com/devmatto/image/upload/v1486316603/DSC00043_bhzkiu.jpg', clickHandler: this.imagePopup.bind(this) },
        { url: 'https://res.cloudinary.com/devmatto/image/upload/v1486316603/DSC00017_inxt6g.jpg', clickHandler: this.imagePopup.bind(this) },
      ];
    }

  render() {
    return (
      <div className="grid-container">
        { this.state.popUp !== false ? <ImagePreview url={this.state.popUp} /> : <div></div> }
        <ReactRpg
          imagesArray={this.getImages()}
          columns={[ 1, 2, 4 ]}
          padding={10}
        />
      </div>
    );
  }
}

export default Grid;