const MyList = ({mealPlans, addMeal, deleteDay, selectedDay, setSelectedDay}) => {
    return <div>
        <div>
            <h1>Weekly Meal Plan Ideas</h1>
            <button className="button-add" onClick={addMeal}>ADD</button>
        </div>

        <div>
            {mealPlans.map(({id, title, mealForADay}) => (
                <div className={`meal ${id === selectedDay ? "selected" : "default"}`}
                onClick={() => setSelectedDay(id)}
                >
                    <p className="field">{title}</p>
                    <p className="field">{mealForADay.substring(0,60)}</p>
                    <button className="button-delete" onClick={() => deleteDay(id)}>DELETE</button>
                </div>
            ))}
        </div>
    </div>
}

export default MyList;