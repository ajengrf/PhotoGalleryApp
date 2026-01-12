import { memo } from 'react';
import { ActivityIndicator, View } from 'react-native';

import { Colors } from '../../../../themes';
import styles from '../../styles';

const LoadingComponent = () => {
  return (
    <View style={styles.loading}>
      <ActivityIndicator color={Colors.red} size="large" />
    </View>
  );
};

const Loading = memo(LoadingComponent);

export default Loading;
