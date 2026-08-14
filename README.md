# CRUD Tarjetas

Aplicación CRUD desarrollada con **Angular** y **ASP.NET Core** utilizando **Entity Framework Core** y **SQL Server**.

## Tecnologías

### Frontend
- Angular
- TypeScript
- Bootstrap

### Backend
- ASP.NET Core
- Entity Framework Core
- SQL Server

## Requisitos

Antes de ejecutar el proyecto es necesario tener instalado:

- .NET SDK 5.0
- Node.js 24.18.0
- Angular CLI 20.3.34
-Angular 20.3.28
-Visual Studio Code
- SQL Server
- SQL Server Management Studio

Verificar instalación:

```bash
dotnet --version
node -v
npm -v
ng version
```

## Clonar el repositorio

```bash
git clone git@github.com:idchavez/pt-tarjeta-credito.git
cd pt-tarjeta-credito
```

---

# Configuración de la base de datos

1. Abrir SQL Server.
2. Crear una base de datos llamada:

```
TarjetaCreditoDB
```

3. Configuración de la base de datos

La aplicación utiliza SQL Server.

Configura la cadena de conexión en el archivo `appsettings.json` según tu entorno.

Ejemplo:

```json
"ConnectionStrings": {
  "DevConnection": "Server=(localdb)\\MSSQLLocalDB;Database=TarjetaCreditoDB;Trusted_Connection=True;MultipleActiveResultSets=True;"
}
```

4. Ejecutar las migraciones:

```bash
Update-Database
```

# Ejecutar el Backend

Entrar al proyecto:

```bash
cd PTBTarjeta
```

Restaurar paquetes:

```bash
dotnet restore
```

Ejecutar:

```bash
dotnet run
```

La API estará disponible en:

```
https://localhost:5001 si executas con el perfil PTBTarjeta o https://localhost:44323/ con el perfil IIS Express 
```

---

# Ejecutar el Frontend

Entrar al proyecto Angular:

```bash
cd PTTarjetaCredito
```

Instalar dependencias:

```bash
npm install
```

Ejecutar:

```bash
ng serve
```

Abrir:

```
http://localhost:4200
```

---

---

# Estructura del proyecto

```
PTBTarjeta/
PTTarjetaCredito/
.gitignore
README.md
```

---

# Autor

Ivan Dario Chavez Vargas