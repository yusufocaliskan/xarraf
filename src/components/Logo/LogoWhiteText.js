import {Image} from 'react-native';
import StaticImages from '../../constants/StaticImages';
export const LogoWhiteText = () => {
  return (
    <Image resizeMode="contain" source={StaticImages.appication.logo_white} />
  );
};

export default LogoWhiteText;
