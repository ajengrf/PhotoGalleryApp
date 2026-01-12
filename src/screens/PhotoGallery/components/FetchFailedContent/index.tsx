import { memo } from 'react';
import { Pressable, Text, View } from 'react-native';
import styles from './styles';

interface FetchFailedComponentProps {
  fetchNextPage: () => void;
}

const FetchFailedComponent = ({ fetchNextPage }: FetchFailedComponentProps) => {
  return (
    <View style={styles.container}>
      <Text>Failed to load photos ( •̯́ ₃ •̯̀)</Text>
      <Pressable onPress={fetchNextPage}>
        <View style={styles.contentContainer}>
          <Text style={styles.text}>Retry</Text>
        </View>
      </Pressable>
    </View>
  );
};

const FetchFailedContent = memo(FetchFailedComponent);

export default FetchFailedContent;
