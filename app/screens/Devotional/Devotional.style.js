import { StyleSheet } from 'react-native';
import color from '../../utils/color';

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    backgroundColor: color.maroon,
  },
  list: {
    flex: 1,
    margin: 6
  },
  itemWrapper: {
    flex: 1,
    flexDirection: 'row',
    padding: 6,
    backgroundColor: color.white,
    marginBottom: 5,
    shadowColor: 'black',
    shadowOffset: {
        width: 0,
        height: 3
    },
    shadowRadius: 5,
    shadowOpacity: 1.0,
    borderRadius: 10
  },
  dateWrapper: {
    height: 40,
    width: 40,
    borderRadius: 40,
    borderColor: color.ripeLemon,
    backgroundColor: color.maroon,
    borderWidth: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 4
  },
  titleWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    margin: 4
  },
  iconWrapper: {
    height: 26,
    width: 26,
    backgroundColor: color.maroon,
    borderRadius: 26,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10
  },
  date: {
    color: color.ripeLemon
  },
  title: {
    fontSize: 18
  },
  icon: {
    fontSize: 14,
    color: color.white
  },
  loading: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  tab: {
    backgroundColor: color.maroon
  },
  tabText: {
    color: color.white,
    fontWeight: 'bold'
  },
  tabActive: {
    backgroundColor: color.gold
  },
  tabActiveText: {
    color: color.maroon,
    fontWeight: 'bold'
  },
  tabBar: {
    backgroundColor: color.gold
  }
});