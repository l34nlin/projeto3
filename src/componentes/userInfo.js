
const userInfo = ({items}) => {
    return (
        <div>
            {items.map(items=>(<div><p>{item.name}</p><p>{item.birthday}</p><p>{item.email}</p><div/>))}
            </div>
        
    );
}
// const items = [
//     {
//       name: 'Teste nome',
//       birthday: '10/10/10',
//       email: 'teste@teste.com'
//     },
//     {
//       name: 'Teste nome 2',
//       birthday: '10/10/10',
//       email: 'teste2@teste.com'
//     },
//     {
//       name: 'Teste nome 3',
//       birthday: '10/10/10',
//       email: 'teste3@teste.com'
//     }
//   ];

export default userInfo;