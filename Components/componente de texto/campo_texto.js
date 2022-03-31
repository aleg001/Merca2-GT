const CampoTexto = () =>{
    const styles= {
        width: '300px',
        height: '25px',
        fontSize: '15px',
        borderRadius: '30px',
        outline: 'none',
        border:'none',
        background: '#f1f1f1',
        position: 'relative',
        padding: '15px',
        borderColor: 'gey'
    
      }
      return (
        <div className="form" >
            <input placeholder="Texto" style={styles}></input>
        </div>
         )
  }
    
    ReactDOM.render(
      <CampoTexto />,
      document.getElementById('root')
    )