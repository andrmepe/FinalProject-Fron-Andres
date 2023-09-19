import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Drawer, IconButton, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import './Botones.css'; // Archivo CSS para estilos

const Botones = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerToggle = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  return (
    <div style={{display:'flex'}}>
      {/* Mostrar icono en dispositivos móviles */}
      <IconButton
        edge="start"
        color="inherit"
        aria-label="menu"
        onClick={handleDrawerToggle(true)}
        className="menu-icon"
      >
        <MenuIcon style={{color:'white', marginLeft:'40px', marginTop:'10px', fontSize:'40px'}}/>
      </IconButton>

      {/* Drawer para dispositivos móviles */}
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={handleDrawerToggle(false)}
        
      >
        <div
          role="presentation"
          onClick={handleDrawerToggle(false)}
          onKeyDown={handleDrawerToggle(false)}
        >
          <MenuItem>
            <Link to="/InformacionPersonal" className="menu-link1">
              Personal information
            </Link>
          </MenuItem>
          <MenuItem>
            <Link to="/ProyectosCreados" className="menu-link1">
              Projects created
            </Link>
          </MenuItem>
          <MenuItem>
            <Link to="/RedesSociales" className="menu-link1">
              Social networks
            </Link>
          </MenuItem>
          <MenuItem>
            <Link to="/TecnologiasAprendidas" className="menu-link1">
              Technologies learned
            </Link>
          </MenuItem>
          <MenuItem>
            <Link to="/SolicitudesRecibidas" className="menu-link1">
              Applications received
            </Link>
          </MenuItem>
        </div>
      </Drawer>

      {/* Mostrar enlaces en pantalla grande */}
      <div className="menu-links">
        <MenuItem>
          <Link to="/InformacionPersonal" className="menu-link">
            Personal information
          </Link>
        </MenuItem>
        <MenuItem>
          <Link to="/ProyectosCreados" className="menu-link">
            Projects created
          </Link>
        </MenuItem>
        <MenuItem>
          <Link to="/RedesSociales" className="menu-link">
            Social networks
          </Link>
        </MenuItem>
        <MenuItem>
          <Link to="/TecnologiasAprendidas" className="menu-link">
            Technologies learned
          </Link>
        </MenuItem>
        <MenuItem>
          <Link to="/SolicitudesRecibidas" className="menu-link">
            Applications received
          </Link>
        </MenuItem>
        
      </div>
    </div>
  );
};

export default Botones;