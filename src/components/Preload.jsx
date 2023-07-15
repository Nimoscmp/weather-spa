const Preload = () => {
    return (
    <>
        <section className="preload">
            <div className="loading">
                <h4>Cargando...</h4>
                <progress value="50" max="100" className="progress"></progress>
            </div>
        </section>            
    </>
    )
}

export default Preload;
