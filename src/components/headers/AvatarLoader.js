import React from 'react';
import PropTypes from 'prop-types';
import withStyles from "@material-ui/core/es/styles/withStyles";
import classNames from 'classnames';
import Button from "@material-ui/core/es/Button/Button";



class AvatarLoader extends React.Component {
    constructor(props) {
        super(props);
    }

    loadFileBtn = event => {
        document.getElementById('file-input').click();
    };
    avatarChange = event =>    {
        var tgt = event.target || window.event.srcElement,
            files = tgt.files;

        if (FileReader && files && files.length) {
            var fr = new FileReader();
            fr.onload = function () {
                document.getElementById('out-img').src = fr.result;
                document.getElementById('load-btn').remove();
            }
            fr.readAsDataURL(files[0]);
        }

        // Not supported
        else {
            alert('This file ')
        }
    }

    render() {
        const {classes} = this.props;
        return (
            <div>
                <input type="file" id='file-input' hidden onChange={this.avatarChange}/>
                <div style={{
                    maxWidth:'100%',
                    display:'initial'
                }}
                     onClick={this.loadFileBtn}>
                    <img src="" id='out-img' alt="" style={{
                        maxWidth:'100%'
                    }}/>
                </div>
                <Button color='primary' id='load-btn' onClick={this.loadFileBtn} style={{fontWeight:'bold',fontSize:13,paddingLeft:0,paddingRight:0}}>Выбрать файл</Button>

            </div>
        )
    }
}

AvatarLoader.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default AvatarLoader;