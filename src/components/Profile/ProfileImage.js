import React, {
  ChangeEvent,
  FunctionComponent,
  useEffect,
  useState,
} from 'react';
import axios from 'axios';
import { doc, updateDoc } from 'firebase/firestore';
import { HiOutlineUpload } from 'react-icons/hi';
import { db } from '../../config/firebase';
import { useStore } from '../../stored';
import { async } from '@firebase/util';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const ProfileImage = () => {
  const { user } = useStore((state) => state);
  const [quote, setQuote] = useState('');
  const [isUpdatingImg, setIsUpdatingImg] = useState(false);

  useEffect(() => {
    axios
      .get('https://api.quotable.io/random')
      .then((res) => setQuote(res.data.content));
  }, []);

  const changeProfileImage = async (e) => {
    try {
      setIsUpdatingImg(true);
      if (!user) return;

      const form = new FormData();
      // @ts-ignore
      form.append('image', e.target.files[0]);
      const res = await axios({
        method: 'post',
        url: `https://api.imgbb.com/1/upload?key=02efec2c3808e9fdeb329eaca6ba30e0`,
        data: form,
        headers: {
          'content-type': 'multipart/form-data',
        },
      });

      updateDoc(doc(db, 'users', user.uid), {
        photoURL: res.data.data.display_url,
      }).finally(() => setIsUpdatingImg(false));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <p>Ảnh đại diện</p>
      <div>
        <LazyLoadImage src={user?.photoURL} alt="profile picture" />
      </div>
      <label htmlFor="upload-img">
        <HiOutlineUpload />
        <p>Cập nhật ảnh đại diện</p>
      </label>

      <input
        id="upload-img"
        type="file"
        accept="image/*"
        className="hidden"
        onChange={changeProfileImage}
      />

      <div>
        <p>{user?.displayName}</p>
      </div>
    </div>
  );
};

export default ProfileImage;
