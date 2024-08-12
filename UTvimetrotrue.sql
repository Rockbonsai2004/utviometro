-- Tabla pluvimetros
CREATE TABLE pluvimetros (
    pluvimetro_id SERIAL PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    ubicacion VARCHAR(100),
    creado_en TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Tabla alertas_inundacion
CREATE TABLE alertas_inundacion (
    alerta_id SERIAL PRIMARY KEY,
    pluvimetro_id INT REFERENCES pluvimetros(pluvimetro_id),
    nivel_alerta VARCHAR(50),
    mensaje_alerta TEXT,
    creado_en TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Tabla datos_precipitacion
CREATE TABLE datos_precipitacion (
    dato_id SERIAL PRIMARY KEY,
    pluvimetro_id INT REFERENCES pluvimetros(pluvimetro_id),
    marca_tiempo TIMESTAMP NOT NULL,
    precipitacion_mm FLOAT NOT NULL
);

-- Inserción de datos de ejemplo
INSERT INTO pluvimetros (nombre, ubicacion) VALUES
('Pluviómetro 1', 'Ubicación 1'),
('Pluviómetro 2', 'Ubicación 2');

INSERT INTO alertas_inundacion (pluvimetro_id, nivel_alerta, mensaje_alerta) VALUES
(1, 'Rojo', 'Alerta máxima de inundación'),
(2, 'Ámbar', 'Alerta media de inundación');

INSERT INTO datos_precipitacion (pluvimetro_id, marca_tiempo, precipitacion_mm) VALUES
(1, '2024-08-04 12:00:00', 10.5),
(2, '2024-08-04 13:00:00', 5.2);