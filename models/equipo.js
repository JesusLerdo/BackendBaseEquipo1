const modelsEquipo = {
    queryGetEquipo: "SELECT * FROM Equipo",
    queryGetEquipoByID:`SELECT * FROM Equipo WHERE ID = ?`,
    queryDeleteEquipoByID: `UPDATE Equipo SET Activo = 'N' WHERE ID = ?`,
    queryEquipoExists: `SELECT Nombre FROM Equipo WHERE Nombre = ?`,
    queryAddEquip:
    `INSERT INTO Equipo
        (Nombre,
        Ciudad,
        Pais, 
        Dueño,  
        Año_Fundacion, 
        Activo )
        VALUES (
        ?, ?, ?, ?, ?, ?)`,
    
    }
    
    
    module.exports = modelsEquipo