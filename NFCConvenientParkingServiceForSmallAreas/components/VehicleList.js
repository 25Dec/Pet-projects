import {View, FlatList} from 'react-native';
import SingleVehicle from './SingleVehicle';

const data = [
  {
    id: Math.random(),
    license_plate: '59A-12345',
    time_in: new Date(),
    time_out: new Date(),
    is_lost_card: false,
    report_lost_at: new Date(),
  },
  {
    id: Math.random(),
    license_plate: '59A-12345',
    time_in: new Date(),
    time_out: new Date(),
    is_lost_card: false,
    report_lost_at: new Date(),
  },
  {
    id: Math.random(),
    license_plate: '59A-12345',
    time_in: new Date(),
    time_out: new Date(),
    is_lost_card: false,
    report_lost_at: new Date(),
  },
  {
    id: Math.random(),
    license_plate: '59A-12345',
    time_in: new Date(),
    time_out: new Date(),
    is_lost_card: false,
    report_lost_at: new Date(),
  },
  {
    id: Math.random(),
    license_plate: '59A-12345',
    time_in: new Date(),
    time_out: new Date(),
    is_lost_card: false,
    report_lost_at: new Date(),
  },
  {
    id: Math.random(),
    license_plate: '59A-12345',
    time_in: new Date(),
    time_out: new Date(),
    is_lost_card: false,
    report_lost_at: new Date(),
  },
  {
    id: Math.random(),
    license_plate: '59A-12345',
    time_in: new Date(),
    time_out: new Date(),
    is_lost_card: false,
    report_lost_at: new Date(),
  },
  {
    id: Math.random(),
    license_plate: '59A-12345',
    time_in: new Date(),
    time_out: new Date(),
    is_lost_card: false,
    report_lost_at: new Date(),
  },
];

const VehicleList = () => {
  return (
    <View className="h-full">
      <FlatList
        data={data}
        renderItem={({item}) => <SingleVehicle item={item} />}
        keyExtractor={item => item.id}
        alwaysBounceVertical={false}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default VehicleList;
