import React from 'react';
import {Image, Pressable, Text} from 'react-native';
import styles from '../screens/HomeView.style';
import {Contact} from '../services/contactService';
interface ContactItemProps {
  contact: Contact;
  isSelected: boolean;
  onPress: (id: number) => void;
}

const ContactItem: React.FC<ContactItemProps> = ({
  contact,
  isSelected,
  onPress,
}) => {
  const handlePress = () => {
    if (contact.id !== undefined) {
      onPress(contact.id);
    } else {
      console.warn(`Contact Id is undefined for ${contact.name}`);
    }
  };
  return (
    <Pressable
      onPress={handlePress}
      style={{
        ...styles.contactItem,
        backgroundColor: isSelected ? '#e0e0e0' : '#fff',
        transform: [{scale: isSelected ? 1.05 : 1}],
      }}>
      <Image
        source={{
          uri: contact.imageUri || require('../assets/default-image.png'),
        }}
        style={{width: 50, height: 50, borderRadius: 25}}
      />
      <Text style={styles.contactName}>{contact.name}</Text>
      <Text style={styles.contactPhone}>{contact.phone}</Text>
      <Text style={styles.contactEmail}>{contact.email}</Text>
    </Pressable>
  );
};

export default ContactItem;
