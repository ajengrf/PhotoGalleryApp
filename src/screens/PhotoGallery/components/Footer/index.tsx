import { memo } from 'react';
import { ActivityIndicator, Pressable, Text, View } from 'react-native';

import { Colors } from '../../../../themes';
import styles from '../../styles';

interface FooterComponentProps {
  isFetchingNextPage: boolean;
  isFetchNextPageError: boolean;
  fetchNextPage: () => void;
}

const FooterComponent = ({
  isFetchingNextPage,
  isFetchNextPageError,
  fetchNextPage,
}: FooterComponentProps) => {
  if (isFetchingNextPage) {
    return (
      <View style={styles.footerContentContainer}>
        <ActivityIndicator color={Colors.cream} />
      </View>
    );
  }

  if (isFetchNextPageError) {
    return (
      <Pressable onPress={fetchNextPage}>
        <View style={styles.footerContentContainer}>
          <Text style={styles.retryText}>Retry</Text>
        </View>
      </Pressable>
    );
  }

  return null;
};

const Footer = memo(FooterComponent);

export default Footer;
