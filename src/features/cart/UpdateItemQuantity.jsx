import { useDispatch } from 'react-redux';
import Button from '../../ui/Button';
import { decreaseItemQuantity, increaseItemQuantity } from './cartSlice';

function UpdateItemQuantity({ pizzaID, currentQuantity }) {
  const dispatch = useDispatch();
  return (
    <div className="flex items-center gap-2 md:gap-3 ">
      <Button
        onClick={() => dispatch(decreaseItemQuantity(pizzaID))}
        type="round"
      >
        -
      </Button>
      <span className="text-sm font-medium">{currentQuantity}</span>
      <Button
        onClick={() => dispatch(increaseItemQuantity(pizzaID))}
        type="round"
      >
        +
      </Button>
    </div>
  );
}

export default UpdateItemQuantity;
