export const categories = [
  {
    name: 'art',
    image: 'https://cdn.pixabay.com/photo/2017/08/30/12/45/girl-2696947__340.jpg',
  },
  {
    name: 'cars',
    image: 'https://cdn.pixabay.com/photo/2019/07/30/08/11/fiat-4372246__340.jpg',
  },
  {
    name: 'cats',
    image: 'https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554__340.jpg',
  },
  {
    name: 'crafts',
    image: 'https://cdn.pixabay.com/photo/2014/09/18/11/08/crochet-450724__340.jpg',
  },
  {
    name: 'decor',
    image: 'https://cdn.pixabay.com/photo/2016/11/21/18/20/bright-1847006__340.jpg',
  },
  {
    name: 'dogs',
    image: 'https://cdn.pixabay.com/photo/2018/03/31/06/31/dog-3277416__340.jpg',
  },
  {
    name: 'fashion',
    image: 'https://cdn.pixabay.com/photo/2022/09/24/17/17/model-7476888__340.jpg',
  },
  {
    name: 'fitness',
    image: 'https://cdn.pixabay.com/photo/2016/11/29/09/43/active-1868780__340.jpg',
  },
  {
    name: 'food',
    image: 'https://cdn.pixabay.com/photo/2015/09/09/20/13/pizza-933032__340.jpg',
  },
  {
    name: 'nature',
    image: 'https://cdn.pixabay.com/photo/2016/07/04/18/16/sun-flower-1497092__340.jpg',
  },
  {
    name: 'other',
    image: 'https://cdn.pixabay.com/photo/2021/09/13/23/10/vinyl-6622596__340.jpg',
  },
  {
    name: 'photography',
    image: 'https://cdn.pixabay.com/photo/2012/04/14/13/15/digital-camera-33879__340.png',
  },
  {
    name: 'quotes',
    image: 'https://cdn.pixabay.com/photo/2017/08/07/20/21/still-2607435__340.jpg',
  },
  {
    name: 'technology',
    image: 'https://cdn.pixabay.com/photo/2019/10/01/13/59/background-4518359__340.jpg',
  },
  {
    name: 'travel',
    image: 'https://cdn.pixabay.com/photo/2016/11/14/04/00/beach-1822544__340.jpg',
  },
  {
    name: 'wallpaper',
    image: 'https://cdn.pixabay.com/photo/2017/07/03/20/17/colorful-2468874__340.jpg',
  }
];
  
export const feedQuery = `*[_type == "pin"] | order(_createdAt desc) {
    image{
      asset->{
        url
      }
    },
        _id,
        destination,
        postedBy->{
          _id,
          userName,
          image
        },
        save[]{
          _key,
          postedBy->{
            _id,
            userName,
            image
          },
        },
      } `;
  
  export const pinDetailQuery = (pinId) => {
    const query = `*[_type == "pin" && _id == '${pinId}']{
      image{
        asset->{
          url
        }
      },
      _id,
      title, 
      about,
      category,
      destination,
      postedBy->{
        _id,
        userName,
        image
      },
     save[]{
        postedBy->{
          _id,
          userName,
          image
        },
      },
      comments[]{
        comment,
        _key,
        postedBy->{
          _id,
          userName,
          image
        },
      }
    }`;
    return query;
  };
  
  export const pinDetailMorePinQuery = (pin) => {
    const query = `*[_type == "pin" && category == '${pin.category}' && _id != '${pin._id}' ]{
      image{
        asset->{
          url
        }
      },
      _id,
      destination,
      postedBy->{
        _id,
        userName,
        image
      },
      save[]{
        _key,
        postedBy->{
          _id,
          userName,
          image
        },
      },
    }`;
    return query;
  };
  
  export const searchQuery = (searchTerm) => {
    const query = `*[_type == "pin" && title match '${searchTerm}*' || category match '${searchTerm}*' || about match '${searchTerm}*']{
          image{
            asset->{
              url
            }
          },
              _id,
              destination,
              postedBy->{
                _id,
                userName,
                image
              },
              save[]{
                _key,
                postedBy->{
                  _id,
                  userName,
                  image
                },
              },
            }`;
    return query;
  };
  
  export const userQuery = (userId) => {
    const query = `*[_type == "user" && _id == '${userId}']`;
    return query;
  };
  
  export const userCreatedPinsQuery = (userId) => {
    const query = `*[ _type == 'pin' && userId == '${userId}'] | order(_createdAt desc){
      image{
        asset->{
          url
        }
      },
      _id,
      destination,
      postedBy->{
        _id,
        userName,
        image
      },
      save[]{
        postedBy->{
          _id,
          userName,
          image
        },
      },
    }`;
    return query;
  };
  
  export const userSavedPinsQuery = (userId) => {
    const query = `*[_type == 'pin' && '${userId}' in save[].userId ] | order(_createdAt desc) {
      image{
        asset->{
          url
        }
      },
      _id,
      destination,
      postedBy->{
        _id,
        userName,
        image
      },
      save[]{
        postedBy->{
          _id,
          userName,
          image
        },
      },
    }`;
    return query;
  };