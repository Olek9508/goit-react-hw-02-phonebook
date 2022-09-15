
export const Filter = ({value, onChange}) =>  {
      return (
        <form >
          <label>Find contacts by name
          <input
          type="text"
          value={value}
          onChange={onChange} />
          </label>
        </form>
        )
    }
