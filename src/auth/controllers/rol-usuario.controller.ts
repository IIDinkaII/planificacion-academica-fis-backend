import { Body, Controller, Delete, Get, Param, Post } from "@nestjs/common";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";
import { RolUsuarioDto } from "../dtos/rol-usuario";
import RolUsuarioService from "../services/rol-usuario.service";

@ApiBearerAuth('defaultBearerAuth')
@ApiTags("Roles de los usuarios")
@Controller("api/rolesusuarios")
export class RolUsuarioController{
    constructor(
        private servicioRolUsuaio : RolUsuarioService
    ){}

    @Get("obtenerRolesUsuarios")
    async obtenerRolesUsuarios(){
        return this.servicioRolUsuaio.obtenerRolesUsuarios()
    }

    @Get("obtenerRolUsuarioSegunIdUsuario/:id")
    async obtenerRolUsuarioSegunIdUsuario(@Param("id") idUsuario :  string){
        return await this.servicioRolUsuaio.obtenerRolUsuarioSegunIdUsuario(idUsuario);
    }

    @Post("crearRolUsuario")
    async crearRolUsuario(@Body() rolUsuario : RolUsuarioDto){
        return this.servicioRolUsuaio.crearRolUsuario(rolUsuario);
    }

    @Delete("eliminarRolUsuario")
    async eliminarRolUsuario(idRolUsuario : string){
        return await this.servicioRolUsuaio.eliminarRolUsuario(idRolUsuario);
    }
}