import {Image} from 'react-native';
import StaticImages from '../../constants/StaticImages';
export const Logo = () => {
  return <Image resizeMode="contain" source={StaticImages.appication.logo} />;
};

export default Logo;
