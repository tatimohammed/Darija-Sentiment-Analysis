# Darija Sentiment Analysis
## Use Case
Sentiment analysis is an incredibly powerful tool in the world of natural language processing. By analyzing the subjective information found within text data, sentiment analysis allows us to identify and categorize opinions as positive, negative.

In the context of Morocco (Darija), sentiment analysis can be an invaluable asset for businesses and organizations looking to better understand the satisfaction of their customers. By analyzing social media posts and other forms of text data, sentiment analysis can help businesses identify areas where they can improve their products or services, as well as gain insights into what their customers truly value.

But sentiment analysis isn't just limited to the world of commerce. It has far-reaching implications in a variety of fields, from healthcare to politics and beyond. For example, sentiment analysis can be used to analyze patient feedback and reviews of healthcare providers, helping to identify areas where care can be improved. In the realm of politics, sentiment analysis can be used to gauge public opinion on candidates and policies, helping politicians make informed decisions.

Ultimately, sentiment analysis is a powerful tool for anyone looking to gain deeper insights into the opinions and attitudes of people expressed in text data. Whether it's for business or for broader societal analysis, sentiment analysis is a crucial part of our modern analytical toolkit.

## Final Results
![sa](https://user-images.githubusercontent.com/95311883/236663758-0e5bcb3a-7414-4cbc-8893-9dd0bb3554e7.png)
The sentiment analysis API allows businesses to quickly and accurately predict the sentiment of customer comments as positive or negative. By analyzing the data, businesses can gain valuable insights into their customers' opinions and improve their products or services accordingly. The API generates a pie chart to visualize the data, making it easy for businesses to understand overall customer satisfaction.

## Dataset
Source: [Data](https://github.com/ososs/Arabic-Sentiment-Analysis-corpus/blob/master/MSAC.arff)

## Fine-tuning a BERT
`Bidirectional Encoder Representations from Transformers` model for sentiment analysis involves the following steps:

`Data preprocessing`: The first step is to preprocess the data, which involves cleaning the text, tokenizing it, and converting it into numerical form that can be fed into the model.

`Model selection`: The next step is to choose a pre-trained BERT model that will be fine-tuned for sentiment analysis.

`Fine-tuning the model with DARIJA`: The BERT model is then fine-tuned using the labeled training data. This involves adjusting the weights of the pre-trained model to learn the specific task of sentiment analysis on the training data.

`Validation`: Once the model has been fine-tuned, it is evaluated on a validation set to ensure that it is accurately predicting sentiment.

`Testing`: Finally, the model is tested on a hold-out test set to evaluate its performance on new, unseen data.
## Our Accuracy
- Accuracy: 75.5%
- AUC: 0.8386

## Repo Tree
```bash
.
├── Darija-Sentiment-Analysis-Notebook.ipynb
├── README.md
├── sa.png
└── Sentiment-analysis-website
    ├── index.html
    ├── scripts.js
    ├── style.css
    ├── test.py
    └── test.txt

1 directory, 8 files
```
