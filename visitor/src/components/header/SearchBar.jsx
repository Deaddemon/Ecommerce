import { makeStyles,  InputBase } from "@material-ui/core"
import { Search} from '@material-ui/icons'


const useStyle = makeStyles((theme) =>
 ({
  search: {
    position: 'relative',
    borderRadius: 2,
    backgroundColor: '#ffff',
    marginLeft: '5%',
    width: '35%',
    display: 'flex',
     
  },
  searchIcon: {
    padding: theme.spacing(1 , 0.5),
    height: '100%',
    display: 'flex',
    color: 'blue',
    marginRight: 0
  },
  inputRoot: {
    fontSize: 'unset',
    width: '100%'
    
  },
  inputInput: {
    padding: theme.spacing(1, 0 , 1 , 2),
    color: 'black',
    
     
  },
})
);

const SearchBar = ()=> {
const classes = useStyle();
return (
  <div className={classes.search}>
     
    <InputBase
      placeholder="Search for products, brands and more"
      classes={{
        root: classes.inputRoot,
        input: classes.inputInput,
      }}
      inputProps={{ 'aria-label': 'search ' }}
    />
    <div className={classes.searchIcon}>
      <Search  />
    </div>
  </div>
);
}


export default SearchBar;