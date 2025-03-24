import React, { useState } from 'react';
import './ProjectManager.css';

function ProjectManager() {
    const [units, setUnits] = useState([
        { id: 'unit1', name: 'Unit 1', cost: 100, quantity: 1 },
        { id: 'unit2', name: 'Unit 2', cost: 150, quantity: 1 },
        { id: 'unit3', name: 'Unit 3', cost: 200, quantity: 1 }
    ]);

    const handleCostChange = (id, value) => {
        setUnits(units.map(unit => 
            unit.id === id ? { ...unit, cost: Number(value) } : unit
        ));
    };

    const handleNameChange = (id, newName) => {
        setUnits(units.map(unit => 
            unit.id === id ? { ...unit, name: newName } : unit
        ));
    };

    const handleQuantityChange = (id, value) => {
        setUnits(units.map(unit => 
            unit.id === id ? { ...unit, quantity: Number(value) } : unit
        ));
    };

    const getUnitTotal = (unit) => unit.cost * unit.quantity;
    const totalCost = units.reduce((sum, unit) => sum + getUnitTotal(unit), 0);

    return (
        <div className="project-manager">
            <div className="header">
                <h1>Project Cost Manager</h1>
                <div>Total Cost: ${totalCost.toFixed(2)}</div>
            </div>

            <table className="cost-table">
                <thead>
                    <tr>
                        <th>Unit Name</th>
                        <th>Cost ($)</th>
                        <th>Quantity</th>
                        <th>Actions</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                    {units.map((unit) => (
                        <tr key={unit.id}>
                            <td>
                                <input
                                    type="text"
                                    className="name-input"
                                    value={unit.name}
                                    onChange={(e) => handleNameChange(unit.id, e.target.value)}
                                />
                            </td>
                            <td>
                                <input
                                    type="number"
                                    className="cost-input"
                                    value={unit.cost}
                                    onChange={(e) => handleCostChange(unit.id, e.target.value)}
                                />
                            </td>
                            <td>
                                <input
                                    type="number"
                                    className="quantity-input"
                                    value={unit.quantity}
                                    min="1"
                                    onChange={(e) => handleQuantityChange(unit.id, e.target.value)}
                                />
                            </td>
                            <td>
                                <button 
                                    className="button"
                                    onClick={() => handleCostChange(unit.id, unit.cost + 10)}
                                >
                                    Increase by $10
                                </button>
                            </td>
                            <td className="unit-total">
                                ${getUnitTotal(unit).toFixed(2)}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default ProjectManager;