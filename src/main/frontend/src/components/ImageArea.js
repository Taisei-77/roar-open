import React, { useCallback } from 'react';
import IconButton from '@material-ui/core/IconButton';
import AddPhotoAlternateIcon from '@material-ui/icons/AddPhotoAlternate';
import { storage } from "../firebase/index";
import ImagePreview from './ImagePreview';

const ImageArea = (props) => {
    //画像を削除する処理
    const deleteImage = useCallback(async (id) => {
        const ret = window.confirm('この画像を削除しますか？')
        if (!ret) {
            return false
        } else {
            const newImages = props.images.filter(image => image.id !== id)
            props.setImages(newImages);
            return storage.ref('images').child(id).delete()
        }
    }, [props.images])

    //画像をアップロードする処理
    const uploadImage = useCallback((event) => {
        const file = event.target.files;
        let blob = new Blob(file, {type:"image/jpeg"});
        //保存された画像ファイルの名前のランダムにする処理
        const S = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
        const N = 16;
        const fileName = Array.from(crypto.getRandomValues(new Uint32Array(N))).map((n) => S[n%S.length]).join('');
        // console.log(fileName);
        const uploadRef = storage.ref('images').child(fileName);
        const uploadTask = uploadRef.put(blob);
        // console.log(uploadTask);
        uploadTask.then(() => {
            uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
                const newImage = {id: fileName, path: downloadURL};
                props.setImages((prevState => [...prevState, newImage]))
                //console.log(newImage);
                props.getImages(newImage.path);
            });
        })
        
    
    }, [props.setImages])


    

    return(
        <div>
            <div>
                {props.images.length > 0 && (
                    props.images.map(image => <ImagePreview delete={deleteImage} id={image.id} path={image.path} key={image.id}/>)
                )}
            </div>
            <div>
                <IconButton>
                    <label>
                        <span>画像を登録する</span>
                        <AddPhotoAlternateIcon/>
                        <input
                            className="d-none"
                            type="file"
                            id="image"
                            onChange={(event) => uploadImage(event)}
                        />
                    </label>
                </IconButton>
            </div>
        </div>
    )
}

export default ImageArea;