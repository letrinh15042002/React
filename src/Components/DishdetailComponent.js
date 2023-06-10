import React from 'react';
import {
    Card, CardImg, CardBody,
    CardTitle
} from 'reactstrap';

function RenderDish({ dish }) {
    return (
        <Card>
            <CardImg width="100%" src={dish.image} alt={dish.name} />
            <CardBody>
                <CardTitle>{dish.name}</CardTitle>
            </CardBody>
        </Card>
    )
}

function RenderComments({ comments }) {
    return (
        <div>
            <h4>Comments</h4>
            {comments.map((comment) => (
                <div key={comment.id}>
                    <p>{comment.text}</p>
                    <p>
                        -- {comment.author}, {new Date(comment.date).toLocaleDateString()}
                    </p>
                </div>
            ))}
        </div>
    );
}

const DishDetail = (props) => {
    const { dish } = props
    console.log(dish)
    return (
        <>
            {dish ? (
                <>
                    <RenderDish dish={dish} />
                    <RenderComments comments={dish.comments} />
                </>
            ) : <></>}

        </>
    )
}

export default DishDetail;
