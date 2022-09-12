import { Button, Table } from 'react-bootstrap';
import { Wrapper } from './style';
import Presenter from './Presenter';
import { useEffect, useState } from 'react';
import User from '../../../domain/entity/User/structure/User';
import { useAuth } from '../../hooks/useAuth';

const UsersList = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [filteredUsers, setFilteredUsers] = useState<User[]>([]);
  const [search, setSearch] = useState<string>('');
  const presenter: Presenter = new Presenter();
  const { auth } = useAuth();

  const loadData = async () => {
    await presenter.getUsers().then((response) => {
      setUsers(response);
      setFilteredUsers(response);
    });
  };

  const handleSearch = () => {
    if (search !== '') {
      setFilteredUsers(
        users.filter((user) => {
          return (
            user.name
              .toLocaleLowerCase()
              .includes(search.toLocaleLowerCase()) ||
            user.lastName
              .toLocaleLowerCase()
              .includes(search.toLocaleLowerCase()) ||
            user.email.toLocaleLowerCase().includes(search.toLocaleLowerCase())
          );
        })
      );
    } else {
      setFilteredUsers(users);
    }
  };

  useEffect(() => {
    handleSearch();
  }, [search]);

  useEffect(() => {
    loadData();
  }, []);
  return (
    <Wrapper>
      {auth && auth.rol === 'Administrador' ? (
        <Button className="createBtn">Crear</Button>
      ) : null}
      <input
        name="buscador"
        value={search}
        className="searcher"
        onChange={(e) => setSearch(e.target.value)}
      />
      <Table striped bordered hover>
        <thead>
          <tr>
            <th></th>
            <th>Nombre</th>
            <th>Correo</th>
            <th>Ultimo ingreso</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.map((user, index: number) => {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{`${user.name} ${user.lastName}`}</td>
                <td>{user.email}</td>
                <td>{user.lastLogin}</td>
                <td>
                  {auth &&
                  (auth.rol === 'Administrador' || auth.rol === 'Editor') ? (
                    <Button>Editar</Button>
                  ) : null}
                  {auth && auth.rol === 'Administrador' ? (
                    <Button>Eliminar</Button>
                  ) : null}
                  <Button>Ver</Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </Wrapper>
  );
};

export default UsersList;
