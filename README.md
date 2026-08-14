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
-Microsoft Visual Studio 2019
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
```

# Configuración de la base de datos

La aplicación utiliza **SQL Server** con **Entity Framework Core**.

1. Configura la cadena de conexión en el archivo `appsettings.json` de la carpeta **PTBTarjeta** según tu entorno.

Ejemplo:

```json
"ConnectionStrings": {
  "DevConnection": "Server=(localdb)\\MSSQLLocalDB;Database=TarjetaCreditoDB;Trusted_Connection=True;MultipleActiveResultSets=True;"
}
```

2. Ejecuta las migraciones para crear la base de datos automáticamente:

```En Herramientas -> administrador de paquetes NuGet -> Consola de administrador de paquetes
Update-Database
```

> **Nota:** Si utilizas la CLI de .NET, también puedes ejecutar:

```bash
dotnet ef database update
```

# Ejecutar el Backend

1. Abre el archivo de solución con Microsoft visual studio (`.sln`) ubicado en la carpeta **PTBTarjeta**.
2. Espera a que Visual Studio restaure los paquetes.
3. Presiona **F5** para compilar y ejecutar la aplicación.

```
La API estará disponible en:
```
https://localhost:44323/swagger/index.html
```

---

# Ejecutar el Frontend

Entrar al proyecto Angular con Visual Studio Code:

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
