export interface User {
    name: string;
    email: string;
    password: string;
  }
  
  let mockDatabase: User[] = [
    {
      name: "Rebeca Dev",
      email: "rebeca@email.com",
      password: "123456"
    }
  ];
  
  const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));
  
  export const mockRegister = async (user: User): Promise<{ success: boolean; message: string }> => {
    await delay(500);
  
    const exists = mockDatabase.some(u => u.email === user.email);
    if (exists) {
      return { success: false, message: "Usuário já existe com esse e-mail." };
    }
  
    mockDatabase.push(user);
    return { success: true, message: "Usuário registrado com sucesso!" };
  };
  
  export const mockLogin = async (
    email: string,
    password: string
  ): Promise<{ success: boolean; message: string; token?: string }> => {
    await delay(500);
  
    const user = mockDatabase.find(u => u.email === email && u.password === password);
    if (user) {
      return { success: true, message: "Login bem-sucedido!", token: "mocked-jwt-token" };
    }
  
    return { success: false, message: "Email ou senha inválidos." };
  };
  