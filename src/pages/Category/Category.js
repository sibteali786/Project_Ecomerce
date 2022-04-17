import React from "react";
import "./Category.scss";
import Stack from "@mui/material/Stack";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import { styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import { ReactComponent as Filter } from "./../../assets/filter.svg";
import IconButton from "@mui/material/IconButton";
import TextField from "@mui/material/TextField";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: "#F4F4F4",
  "&:hover": {
    backgroundColor: "#F4F4F4",
  },
  marginLeft: 0,
  // width: '100%',
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    // width: '100%',
    [theme.breakpoints.up("xs")]: {
      width: "6ch",
    },
  },
}));

const Category = () => {
  // handling the collapsing menu state
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };
  // Handling select box event state
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  // handling Check State
  const [checked, setChecked] = React.useState([0]);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };
  return (
    <div className="categoryContainer">
      <div className="topNavigation">
        <Stack spacing={2}>
          <Breadcrumbs separator="|" aria-label="breadcrumb">
            <a>Enviar a</a>
            <a style={{ fontWeight: "bold" }}>Benito Juarez</a>
          </Breadcrumbs>
        </Stack>
      </div>
      <div className="PageLayout">
        <div className="span-1">
          ENVLA ARRESGLOSY REGALOS PARA CUALQUIER OCASION EN BENITO JUAREZ
        </div>
        <div className="span-2">
          <h6>
            Encuentra arreglos florales y regalos para celebrar cualquier
            ocasion especial con envios a domicilio.
          </h6>
          <p>
            Hermosos affreglos y regalos perfectos para celebrar ese dia
            especial. Nuestros arreglos esten culdadosamente elaborados por
            expertos floistas. eligiendo siempre Ias flores mas frescas y de la
            mas alta calidad. La mejor experiencia de compra y envio de regalos
            en Benito Juarez.
          </p>
        </div>
        <div className="span-3">
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              color="primary"
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
        </div>
        <div className="span-4">
          <p>Ordenar por :</p>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Select</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={age}
              label="Age"
              onChange={handleChange}
            >
              <MenuItem value={"$ Mayor a menor"}>$ Mayor a menor</MenuItem>
              <MenuItem value={"$ Mayor a menor"}>$ Mayor a menor</MenuItem>
              <MenuItem value={"$ Mayor a menor"}>$ Mayor a menor</MenuItem>
            </Select>
          </FormControl>
          <Button variant="contabied">$ Mayor a menor</Button>
        </div>
        <div className="span-5">
          <h5>FILTROS</h5>
          <IconButton aria-label="">
            <Filter />
          </IconButton>
          <h6>Rango de precio</h6>
          <div className="seeachInFilter">
          <TextField label="Desde" variant="outlined" />
          <TextField label="Hasta" variant="outlined" />
          <IconButton aria-label="" style={{ fontSize: "2rem" }}>
            {">"}
          </IconButton>
          </div>
          <Divider />
          <div style={{display:"flex",flexDirection:"row",justifyContent:"space-around"}}>
          <h6>Producto</h6>
          <IconButton aria-label="" onClick={handleClick}>
          {open ? <ExpandLess /> : <ExpandMore />}
            
          </IconButton>
          </div>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <List
              sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
            >
              {[
                "Flores",
                "Plantas",
                "Postres",
                "Globos",
                "Peluches",
                "Joyeria",
                "Belleza",
                "Juguestes",
                "Botanas",
              ].map((item, index) => {
                const labelId = `checkbox-list-label-${index}`;

                return (
                  <ListItem key={index} disablePadding>
                    <ListItemButton
                      role={undefined}
                      onClick={handleToggle(item)}
                      dense
                    >
                      <ListItemIcon>
                        <Checkbox
                          edge="start"
                          checked={checked.indexOf(item) !== -1}
                          tabIndex={-1}
                          disableRipple
                          inputProps={{ "aria-labelledby": labelId }}
                        />
                      </ListItemIcon>
                      <ListItemText id={labelId} primary={`${item}`} />
                    </ListItemButton>
                  </ListItem>
                );
              })}
            </List>
          </Collapse>
        </div>
        <div className="span-6"></div>
        <div className="span-7"></div>
      </div>
    </div>
  );
};

export default Category;
