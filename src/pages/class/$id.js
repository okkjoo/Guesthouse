import { FC } from 'react';

// export default class Id extends Component {
//   constructor(props) {
//     super(props);
//   }
// }

const Id = props => {
  // console.log(props);
  const {
    match: {
      params: { id },
    },
  } = props;
  // console.log(params);
  return <h1>id:{id}</h1>;
};
export default Id;
