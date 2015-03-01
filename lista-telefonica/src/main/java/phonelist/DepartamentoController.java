package phonelist;

import java.util.LinkedList;
import java.util.List;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@RequestMapping("/department")
public class DepartamentoController {
	
	@ResponseBody
	@RequestMapping(method=RequestMethod.GET)
	public List<Departamento> getDepartamentos(){
		List<Departamento> departamentos = new LinkedList<Departamento>();
		departamentos.add(new Departamento(1,"TI"));
		departamentos.add(new Departamento(2,"Tesouraria"));
		departamentos.add(new Departamento(3,"Coordenação"));
		departamentos.add(new Departamento(4,"Administrativo"));
		return departamentos;
	}
	
}
