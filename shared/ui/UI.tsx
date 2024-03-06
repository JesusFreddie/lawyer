import './UI.scss'

export const Button = ({children, size, type}) => {
	return ( 
		<button style={{
			width: size,
		}} className={`button ${type}`}>{children}</button>
	 );
}

export const Title = ({children, mb}) => {
	return (
		<h2 style={{
			marginBottom: mb
		}} className='title'>{children}</h2>
	)
}