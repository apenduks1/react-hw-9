const Filter = ({ filter, onChange }) => (
  <input
    type="text"
    placeholder="Search contacts"
    value={filter}
    onChange={e => onChange(e.target.value)}
  />
);

export default Filter;
