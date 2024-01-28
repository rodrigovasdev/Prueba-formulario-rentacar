-- Creación de tabla Vendedor
CREATE TABLE Vendedor (
    VendedorID INT PRIMARY KEY IDENTITY(1,1),
    Nombre NVARCHAR(100),
    Email NVARCHAR(100)
);

-- Creación de tabla MarcaAuto
CREATE TABLE MarcaAuto (
    MarcaID INT PRIMARY KEY IDENTITY(1,1),
    NombreMarca NVARCHAR(100)
);

-- Creación de tabla ModeloAuto
CREATE TABLE ModeloAuto (
    ModeloID INT PRIMARY KEY IDENTITY(1,1),
    MarcaID INT,
    NombreModelo NVARCHAR(100),
    FOREIGN KEY (MarcaID) REFERENCES MarcaAuto(MarcaID)
);

-- Creación de tabla Solicitudes
CREATE TABLE Solicitudes (
    SolicitudID INT PRIMARY KEY IDENTITY(1,1),
    VendedorID INT,
    MarcaID INT,
    ModeloID INT,
    FechaSolicitud DATE,
    PrecioVenta DECIMAL(10,2),
    FOREIGN KEY (VendedorID) REFERENCES Vendedor(VendedorID),
    FOREIGN KEY (ModeloID) REFERENCES ModeloAuto(ModeloID),
    FOREIGN KEY (MarcaID) REFERENCES MarcaAuto(MarcaID)
);

-- Insercion de Marcas
INSERT INTO MarcaAuto (NombreMarca) VALUES ('Toyota');
INSERT INTO MarcaAuto (NombreMarca) VALUES ('Ford');
INSERT INTO MarcaAuto (NombreMarca) VALUES ('Chevrolet');
INSERT INTO MarcaAuto (NombreMarca) VALUES ('Nissan');
INSERT INTO MarcaAuto (NombreMarca) VALUES ('Mazda');
INSERT INTO MarcaAuto (NombreMarca) VALUES ('Dodge');
INSERT INTO MarcaAuto (NombreMarca) VALUES ('Kia');
INSERT INTO MarcaAuto (NombreMarca) VALUES ('Opel');
INSERT INTO MarcaAuto (NombreMarca) VALUES ('Chery');

-- Insercion de vendedores
INSERT INTO Vendedor (Nombre, Email) VALUES ('Juan Perez', 'juanperez@autos.com');
INSERT INTO Vendedor (Nombre, Email) VALUES ('Rodrigo Vasquez', 'rodrigovasquez@autos.com');
INSERT INTO Vendedor (Nombre, Email) VALUES ('Luis García', 'luisgarcia@autos.com');
INSERT INTO Vendedor (Nombre, Email) VALUES ('Rosa Morales', 'rosamorales@autos.com');
INSERT INTO Vendedor (Nombre, Email) VALUES ('Luisa Perez', 'luisaperez@autos.com');


-- Insercion de modelos
INSERT INTO ModeloAuto (MarcaID, NombreModelo) VALUES (1, 'Corolla'); -- Toyota
INSERT INTO ModeloAuto (MarcaID, NombreModelo) VALUES (1, 'Camry'); -- Toyota
INSERT INTO ModeloAuto (MarcaID, NombreModelo) VALUES (2, 'Mustang'); -- Ford
INSERT INTO ModeloAuto (MarcaID, NombreModelo) VALUES (2, 'F150'); -- Ford
INSERT INTO ModeloAuto (MarcaID, NombreModelo) VALUES (3, 'Spark'); -- Chevrolet
INSERT INTO ModeloAuto (MarcaID, NombreModelo) VALUES (3, 'Camaro'); -- Chevrolet
INSERT INTO ModeloAuto (MarcaID, NombreModelo) VALUES (4, 'Terrano'); -- Nissan
INSERT INTO ModeloAuto (MarcaID, NombreModelo) VALUES (4, '350z'); -- Nissan
INSERT INTO ModeloAuto (MarcaID, NombreModelo) VALUES (5, 'Miata'); -- Mazda
INSERT INTO ModeloAuto (MarcaID, NombreModelo) VALUES (5, 'RX-8'); -- Mazda
INSERT INTO ModeloAuto (MarcaID, NombreModelo) VALUES (6, 'Viper'); -- Dodge
INSERT INTO ModeloAuto (MarcaID, NombreModelo) VALUES (6, 'Charger'); -- Dodge
INSERT INTO ModeloAuto (MarcaID, NombreModelo) VALUES (7, 'Rio 5'); -- Kia
INSERT INTO ModeloAuto (MarcaID, NombreModelo) VALUES (7, 'Cerato'); -- Kia
INSERT INTO ModeloAuto (MarcaID, NombreModelo) VALUES (8, 'Corsa'); -- Opel
INSERT INTO ModeloAuto (MarcaID, NombreModelo) VALUES (8, 'Astra'); -- Opel
INSERT INTO ModeloAuto (MarcaID, NombreModelo) VALUES (9, 'Tiggo 3'); -- Chery
INSERT INTO ModeloAuto (MarcaID, NombreModelo) VALUES (9, 'Tiggo 8'); -- Chery


-- Insercion de solicitudes
INSERT INTO Solicitudes (VendedorID, MarcaID, ModeloID, FechaSolicitud, PrecioVenta) VALUES (4, 1, 2, '2023-05-15', 23000000); 
INSERT INTO Solicitudes (VendedorID, MarcaID, ModeloID, FechaSolicitud, PrecioVenta) VALUES (5, 2, 3, '2023-06-20', 30000000); 
INSERT INTO Solicitudes (VendedorID, MarcaID, ModeloID, FechaSolicitud, PrecioVenta) VALUES (1, 3, 5, '2023-07-25', 5500000); 
INSERT INTO Solicitudes (VendedorID, MarcaID, ModeloID, FechaSolicitud, PrecioVenta) VALUES (2, 5, 9, '2023-08-01', 20500000); 
INSERT INTO Solicitudes (VendedorID, MarcaID, ModeloID, FechaSolicitud, PrecioVenta) VALUES (3, 4, 8, '2023-09-05', 28500000); 
INSERT INTO Solicitudes (VendedorID, MarcaID, ModeloID, FechaSolicitud, PrecioVenta) VALUES (4, 4, 7, '2023-10-10', 5050000); 
INSERT INTO Solicitudes (VendedorID, MarcaID, ModeloID, FechaSolicitud, PrecioVenta) VALUES (5, 6, 12, '2023-11-15', 22000000); 
INSERT INTO Solicitudes (VendedorID, MarcaID, ModeloID, FechaSolicitud, PrecioVenta) VALUES (1, 6, 11, '2023-12-20', 31000000); 
INSERT INTO Solicitudes (VendedorID, MarcaID, ModeloID, FechaSolicitud, PrecioVenta) VALUES (2, 7, 13, '2023-01-25', 5600000); 
INSERT INTO Solicitudes (VendedorID, MarcaID, ModeloID, FechaSolicitud, PrecioVenta) VALUES (3, 7, 14, '2023-02-01', 21000000); 
INSERT INTO Solicitudes (VendedorID, MarcaID, ModeloID, FechaSolicitud, PrecioVenta) VALUES (4, 7, 14, '2023-03-05', 29000000); 
INSERT INTO Solicitudes (VendedorID, MarcaID, ModeloID, FechaSolicitud, PrecioVenta) VALUES (5, 2, 3, '2023-04-10', 5100000); 
INSERT INTO Solicitudes (VendedorID, MarcaID, ModeloID, FechaSolicitud, PrecioVenta) VALUES (1, 3, 6, '2023-05-15', 22500000); 
INSERT INTO Solicitudes (VendedorID, MarcaID, ModeloID, FechaSolicitud, PrecioVenta) VALUES (2, 5, 9, '2023-06-20', 31500000); 
INSERT INTO Solicitudes (VendedorID, MarcaID, ModeloID, FechaSolicitud, PrecioVenta) VALUES (3, 9, 18, '2023-07-25', 5500000); 
INSERT INTO Solicitudes (VendedorID, MarcaID, ModeloID, FechaSolicitud, PrecioVenta) VALUES (4, 8, 15, '2023-08-01', 22500000); 
INSERT INTO Solicitudes (VendedorID, MarcaID, ModeloID, FechaSolicitud, PrecioVenta) VALUES (5, 9, 17, '2023-09-05', 29500000); 
INSERT INTO Solicitudes (VendedorID, MarcaID, ModeloID, FechaSolicitud, PrecioVenta) VALUES (1, 9, 17, '2023-10-10', 5150000); 
INSERT INTO Solicitudes (VendedorID, MarcaID, ModeloID, FechaSolicitud, PrecioVenta) VALUES (2, 4, 7, '2023-11-15', 23000000); 
INSERT INTO Solicitudes (VendedorID, MarcaID, ModeloID, FechaSolicitud, PrecioVenta) VALUES (3, 5, 10, '2023-12-20', 31000000);
INSERT INTO Solicitudes (VendedorID, MarcaID, ModeloID, FechaSolicitud, PrecioVenta) VALUES (1, 6, 11, '2023-04-01', 2000000); 
INSERT INTO Solicitudes (VendedorID, MarcaID, ModeloID, FechaSolicitud, PrecioVenta) VALUES (2, 7, 13, '2023-04-05', 28000000); 
INSERT INTO Solicitudes (VendedorID, MarcaID, ModeloID, FechaSolicitud, PrecioVenta) VALUES (3, 3, 5, '2023-04-10', 5000000); 
INSERT INTO Solicitudes (VendedorID, MarcaID, ModeloID, FechaSolicitud, PrecioVenta) VALUES (3, 2, 3, '2024-01-20', 31000000);
INSERT INTO Solicitudes (VendedorID, MarcaID, ModeloID, FechaSolicitud, PrecioVenta) VALUES (1, 2, 3, '2024-01-19', 1000000);
INSERT INTO Solicitudes (VendedorID, MarcaID, ModeloID, FechaSolicitud, PrecioVenta) VALUES (3, 7, 13, '2024-01-15', 26000000);
INSERT INTO Solicitudes (VendedorID, MarcaID, ModeloID, FechaSolicitud, PrecioVenta) VALUES (1, 7, 13, '2024-01-7', 1000000);
INSERT INTO Solicitudes (VendedorID, MarcaID, ModeloID, FechaSolicitud, PrecioVenta) VALUES (5, 8, 15, '2024-01-6', 3000000);
INSERT INTO Solicitudes (VendedorID, MarcaID, ModeloID, FechaSolicitud, PrecioVenta) VALUES (5, 4, 7, '2024-01-21', 7100000);

--Obtener las 3 marcas más solicitadas, y la cantidad de solicitudes de cada una, ordenadas 
--descendentemente
SELECT TOP 3
MA.NombreMarca,
    COUNT(S.MarcaID) AS CantidadSolicitudes
FROM Solicitudes S
JOIN MarcaAuto MA ON S.MarcaID = MA.MarcaID
GROUP BY MA.NombreMarca
ORDER BY CantidadSolicitudes DESC;


-- Obtener solicitudes del mes actual
SELECT *
FROM Solicitudes
WHERE
    YEAR(FechaSolicitud) = YEAR(GETDATE())
    AND MONTH(FechaSolicitud) = MONTH(GETDATE());


-- Obtener el vendedor que menos solicitudes haya generado en los ultimos 30 dias.
SELECT TOP 1 
    V.VendedorID, 
    V.Nombre, 
    COUNT(S.SolicitudID) AS CantidadSolicitudes
FROM 
    Vendedor V
LEFT JOIN Solicitudes S ON V.VendedorID = S.VendedorID
                        AND S.FechaSolicitud >= DATEADD(DAY, -30, GETDATE())
GROUP BY 
    V.VendedorID, 
    V.Nombre
ORDER BY 
    CantidadSolicitudes ASC;


-- Obtener los modelos que no tengan solicitudes.
SELECT 
    MA.ModeloID,
    MA.NombreModelo
FROM 
    ModeloAuto MA
LEFT JOIN Solicitudes S ON MA.ModeloID = S.ModeloID
WHERE 
    S.SolicitudID IS NULL;


-- Obtener 3 meses con mas dinero en ventas
SELECT TOP 3
    YEAR(FechaSolicitud) AS Año,
    MONTH(FechaSolicitud) AS Mes,
    SUM(PrecioVenta) AS TotalVentas
FROM 
    Solicitudes
GROUP BY 
    YEAR(FechaSolicitud), 
    MONTH(FechaSolicitud)
ORDER BY 
    TotalVentas DESC;