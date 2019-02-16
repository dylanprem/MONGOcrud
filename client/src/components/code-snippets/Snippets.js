import React from "react";

export const SNIPPET_ONE = (
  <pre>
    <code className="language-javascript">
      {`
router.get("/", cors(), (req, res) => {
  const errors = {};
  Item.find()
    .populate("itm")
    .then(itms => {
      if (!itms) {
        errors.noitems = "There are no items";
        return res.status(404).json(errors);
      }
      res.json(itms);
    })
    .catch(err => res.json({ MongoError: err }));
});           
    `}
    </code>
  </pre>
);

export const SNIPPET_TWO = (
  <pre>
    <code className="language-javascript">
      {`
class ListItems extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      errors: {}
    };
  }
  componentDidMount() {
    this.getItems();
  }

  getItems = () => {
    axios
      .get('http://localhost:5000/api/GET')
      .then(res => {
        console.log(res);
        console.log(res.data);
        const items = res.data;
        this.setState({
          items,
          errors: {},
        });
      })
      .catch(err => {
        console.log(err.response.data);
        this.setState({
          errors: err.response.data
        });
      });
  };

...
                `}
    </code>
  </pre>
);
