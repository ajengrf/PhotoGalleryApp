# Photo Gallery App
React Native photo gallery apps that displays photos from Picsum.


## Description
This is a [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).


### Feature
- Display list of photos in 2-column grid layout
- Reload more photos on scroll
- Mark favorite photos with a heart icon


### Optimization Strategy
- Render image using [react-native-fast-image](https://github.com/DylanVann/react-native-fast-image) for image caching
- Implement [flash-list](https://github.com/Shopify/flash-list) for efficient rendering and better performance than FlatList


## Screen Recording
| Normal Flow | Failed on Initial Load | Failed on Next Page |
|-------------|------------------------|---------------------|
| <video src="https://github.com/user-attachments/assets/c1e50d87-0038-4077-bc21-fae02002f92a" /> | <video src="https://github.com/user-attachments/assets/30dd8299-5e9c-4147-a870-a6f47c2f4d63" /> | <video src="https://github.com/user-attachments/assets/f6d9efd6-5ec2-446d-81a9-92465f187884" /> |
